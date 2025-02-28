
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const axios = require('axios');
const { error } = require("console");
const nodemailer = require("nodemailer");
const btoa = require('btoa');
const bodyParser = require('body-parser');
require("dotenv").config();


const port = process.env.PORT || 4000;


// Ensure the upload/images directory exists
const uploadDir = path.join(__dirname, 'upload', 'images');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect("mongodb+srv://plp:Access@cluster0.dyz9f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// API creation
app.get("/", (req, res) => {
    res.send("Express App is running");
});


// Image storage engine
const storage = multer.diskStorage({
    destination: uploadDir, // Use absolute path for the directory
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Creating upload endpoint
app.use("/images", express.static(uploadDir));
app.post("/upload", upload.single('product'), (req, res) => {
    if (req.file) {
        res.json({
            success: 1,
            image_url: `http://localhost:${port}/images/${req.file.filename}`
        });
    } else {
        res.status(400).json({
            success: 0,
            message: 'No file uploaded'
        });
    }
});

// Schema for creating products
const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
   
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

// Define Product model
const Product = mongoose.model("Product", productSchema);

app.post('/addproduct', async (req, res) => {
    try {
        // Find all products
        let products = await Product.find({});
        let id;

        // Check if products exist, then generate new ID
        if (products.length > 0) {
            let last_product = products[products.length - 1]; // Corrected approach
            id = last_product.id + 1;
        } else {
            id = 1;
        }

        // Create new product
        const newProduct = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });

        await newProduct.save();
        console.log("Saved");

        res.json({
            success: true,
            message: "Product added successfully!",
            product: newProduct,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to add product",
            error: error.message,
        });
    }
});

// Remove product API
app.post('/removeproduct', async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id });
        console.log("Product removed");
        res.json({
            success: true,
            message: "Product removed successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to remove product",
            error: error.message,
        });
    }
});
//creating api for all products 

app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("All products fetched");
    res.send(products);

})

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cartData: {
        type: Object,
        default: {}
    },
    role: {  // New role field to define admin or user
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    date: {
        type: Date,
        default: Date.now
    }
}));
//signup

app.post('/signup', async (req, res) => {
    try {
        let check = await User.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, errors: "Existing user found with same email!" });
        }

        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        const user = new User({
            name: req.body.name,  // Ensure the frontend sends 'name'
            email: req.body.email,
            password: req.body.password,
            cartData: cart,
            role: req.body.role || 'user'  // Default role is 'user', but admin can be manually set
        });

        await user.save();

        const token = jwt.sign({ user: { id: user.id, role: user.role } }, 'secret_ecom', { expiresIn: '1h' });

        res.json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/create-admin', async (req, res) => {
    try {
        const admin = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,  // No hashing
            role: "admin", // This will assign the role as admin
        });

        await admin.save();

        res.status(200).json({ success: true, message: "Admin created successfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/login', async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        const passMatch = req.body.password === user.password;
        if (passMatch) {
            const data = {
                user: {
                    id: user.id,
                    role: user.role // Send the user's role as part of the token
                }
            };
            const token = jwt.sign(data, 'secret_ecom');

            console.log("Generated Token:", token); // ✅ Log the token

            if (user.role === 'admin') {
                res.json({ success: true, token, redirectTo: '/admin' });
            } else {
                res.json({ success: true, token, redirectTo: '/user-dashboard' });
            }
        } else {
            res.json({ success: false, error: "Wrong password" });
        }
    } else {
        res.json({ success: false, error: "Wrong email address" });
    }
});

//creating endpoint for latstproducts
app.get('/newcollections', async(req, res) =>{
    let products=await Product.find({});
    let newcollection=products.slice(-8);
    console.log("Newcollection fetched")
    res.send(newcollection);
})

//creating endpoint for popular posts

app.get('/popularproducts', async (req,res)=>{
    let products=await Product.find({category: "women"});
    let popularproducts = products.slice(0, 4);
    console.log("popular products fetched");
    res.send(popularproducts);
})


//creating middleware to fetch user
const fetchUser = async (req, res, next) => {
    console.log("Headers received:", req.headers);  // Log all headers
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ errors: "No token provided. Please log in again." });
    }
    try {
        const data = jwt.verify(token, 'secret_ecom');
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).json({ errors: "Invalid or expired token. Please log in again." });
    }
};


app.post('/addtocart', fetchUser, async (req, res) => {
    try {
        const { itemId } = req.body; // Get the item ID from request body

        let userData = await User.findOne({ _id: req.user.id });

        if (!userData) {
            return res.status(404).json({ error: "User not found" });
        }

        if (!userData.cartData) {
            userData.cartData = {}; // Ensure cartData is initialized
        }

        if (userData.cartData[itemId] === undefined) {
            userData.cartData[itemId] = 1; // Initialize count if item doesn't exist
        } else {
            userData.cartData[itemId] += 1; // Increment count
        }

        await User.findOneAndUpdate(
            { _id: req.user.id }, 
            { cartData: userData.cartData }
        );

        res.json({
            message: `Product ${itemId} added to cart`,
            cartData: userData.cartData
        });

    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

//removing cartdata

app.post('/removefromcart', fetchUser, async (req, res) => {
    try {
        const { itemId } = req.body; // Get the item ID from the request body
        let userData = await User.findOne({ _id: req.user.id }); // Fetch user data

        if (!userData) {
            return res.status(404).json({ error: "User not found" });
        }

        // Ensure cartData is initialized as an object if it's undefined
        if (!userData.cartData) {
            userData.cartData = {};
        }

        // Check if the item exists in the cart
        if (userData.cartData[itemId]) {
            userData.cartData[itemId] -= 1; // Decrease the item count

            // Remove the item if the count is less than or equal to 0
            if (userData.cartData[itemId] <= 0) {
                delete userData.cartData[itemId];
            }
        }

        // Update the cart in the database
        await User.findOneAndUpdate(
            { _id: req.user.id }, 
            { cartData: userData.cartData }
        );

        // Send the updated cartData back to the frontend
        res.json({
            message: `Product ${itemId} removed from cart`,
            cartData: userData.cartData
        });
    } catch (error) {
        console.error("Error removing item from cart:", error);
        res.status(500).json({ error: "Server error" });
    }
});

//cart data
app.post('/getcart', fetchUser, async(req, res)=> {
    console.log('Get cart');
    let userData = await User.findOne({_id: req.user.id});
    res.json(userData.cartData);
})
//contact us

// Email sending endpoint
app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
  
    // Setup Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your email
        pass: process.env.PASSWORD, // Your email app password
      },
    });
  
    let mailOptions = {
      from: email,
      to: process.env.EMAIL, // Your email (receiver)
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: "Message sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong. Try again!" });
    }
  });
  // Define a schema for transactions
const transactionSchema = new mongoose.Schema({
    phoneNumber: String,
    amount: String,
    transactionDate: { type: Date, default: Date.now },
    status: String,
    merchantRequestID: String,
    checkoutRequestID: String,
    responseCode: String,
    responseDescription: String,
});

// Create a model for transactions
const Transaction = mongoose.model('Transaction', transactionSchema);

// Safaricom Daraja API credentials
const consumerKey = 'pAEmzm6H10BOq1OGH6Q0pXo3bllAH1AHvUSmIMcATOR51sDD';
const consumerSecret = 'LrzyG4612MYOJ5EVFLtHvytzFQr2hnOYDkKOCgjfOZGAboYwo06D8zVCRGukgNZA';
const shortCode = '174379';
const lipaNaMpesaPasskey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';

// Base64 encode the consumer key and secret
const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

// STK push endpoint
app.post('/stkpush', async (req, res) => {
    const { phone, amount } = req.body;

    // Generate timestamp
    const timestamp = new Date()
        .toISOString()
        .replace(/[^0-9]/g, '')
        .slice(0, -3);

    // Generate password
    const password = Buffer.from(`${shortCode}${lipaNaMpesaPasskey}${timestamp}`).toString('base64');

    try {
        // Get access token
        const tokenResponse = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
            headers: {
                Authorization: `Basic ${auth}`,
            },
        });

        const accessToken = tokenResponse.data.access_token;

        // STK push request payload
        const stkPayload = {
            BusinessShortCode: shortCode,
            Password: password,
            Timestamp: timestamp,
            TransactionType: 'CustomerPayBillOnline',
            Amount: amount,
            PartyA: phone,
            PartyB: shortCode,
            PhoneNumber: phone,
            CallBackURL: 'https://your-callback-url.com/callback',
            AccountReference: 'Test',
            TransactionDesc: 'Test Payment',
        };

        // Initiate STK push
        const stkResponse = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', stkPayload, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        // Save transaction to MongoDB
        const transaction = new Transaction({
            phoneNumber: phone,
            amount: amount,
            status: 'Pending',
            merchantRequestID: stkResponse.data.MerchantRequestID,
            checkoutRequestID: stkResponse.data.CheckoutRequestID,
            responseCode: stkResponse.data.ResponseCode,
            responseDescription: stkResponse.data.ResponseDescription,
        });

        await transaction.save();

        res.status(200).json({ message: 'STK Push initiated successfully', data: stkResponse.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error initiating STK Push' });
    }
});
  
// Start the server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server is running on port " + port);
    } else {
        console.log("Error: " + error);
    }
});
