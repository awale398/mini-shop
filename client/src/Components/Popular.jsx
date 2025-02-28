import { useState, useEffect  } from 'react'
import Item from './Item'
const Popular = () => {
  const [popularproducts, setpopularproducts] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const response = await fetch("http://localhost:4000/popularproducts"); // Update URL if needed
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
        <div className='max_padd container py-12 xl:py-28 xl:w-[88%]'> 
        {/* <h3 className='h3 text-center'>
                Popular products
            </h3> */}
            <hr  className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16'/>
            {/* container */}
            
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                {popularproducts.map((item) => (
               <Item key={item.id} id={item.id} Image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
               ))}
            </div>
        </div>
    </section>
  )
}

export default Popular