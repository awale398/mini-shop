import { useState } from "react";
import { MdAdd } from "react-icons/md";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    let formData = new FormData();
    formData.append("product", image);

    try {
      const uploadResponse = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });
      const uploadData = await uploadResponse.json();

      if (uploadData.success) {
        const updatedProduct = { ...productDetails, image: uploadData.image_url };

        const addProductResponse = await fetch("http://localhost:4000/addproduct", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedProduct),
        });
        const addProductData = await addProductResponse.json();

        alert(addProductData.success ? "Product added successfully" : "Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-lg mx-auto mt-6">
      <h2 className="text-xl font-bold text-center mb-4">Add a New Product</h2>
      
      <label className="block mb-2 font-medium">Product Name</label>
      <input type="text" name="name" value={productDetails.name} onChange={handleChange} 
        className="w-full p-2 border rounded" placeholder="Enter product name" />
      
      <label className="block mt-4 mb-2 font-medium">Original Price</label>
      <input type="text" name="old_price" value={productDetails.old_price} onChange={handleChange} 
        className="w-full p-2 border rounded" placeholder="Enter original price" />
      
      <label className="block mt-4 mb-2 font-medium">Discounted Price</label>
      <input type="text" name="new_price" value={productDetails.new_price} onChange={handleChange} 
        className="w-full p-2 border rounded" placeholder="Enter discounted price" />
      
      <label className="block mt-4 mb-2 font-medium">Upload Image</label>
      <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" />
      {image && <img src={URL.createObjectURL(image)} alt="Preview" className="w-32 mt-2 rounded-lg" />}
      
      <button onClick={handleSubmit} className="mt-6 bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center gap-2 w-full">
        <MdAdd /> Add Product
      </button>
    </div>
  );
};

export default AddProduct;
