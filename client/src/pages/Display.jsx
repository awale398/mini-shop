import { useState, useEffect  } from 'react'
import Item from '../Components/Item'
const Popular = () => {
  const [allproducts, setpopularproducts] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const response = await fetch("http://localhost:4000/allproducts"); // Update URL if needed
        const data = await response.json();
        setpopularproducts(data);
      } catch (error) {
        console.error("Error fetching popular:", error);
      }
    };

    fetchPopular();
  }, []);
  return (
    <section className='bg-primary'>
        <h3 className='h3 text-center'>
                <b>All products</b>
            </h3>
            <hr  className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16'/>
        <div className='max_padd container py-12 xl:py-28 xl:w-[88%]'> 
            {/* container */}
            
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                {allproducts.map((item) => (
               <Item key={item.id} id={item.id} Image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
               ))}
            </div>
        </div>
    </section>
  )
}

export default Popular