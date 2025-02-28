import Item from "../Components/Item"
import POPULAR from "../assets/popular"

const RelatedProducts = () => {
  return (
    <section className='bg-primary'>
        <div className='max_padd container py-12 xl:w-[88%]'> 
        <h3 className='h3 text-center'>
                Related products
            </h3>
            <hr  className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16'/>
            {/* container */}
            
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                {POPULAR.map((item) => (
               <Item key={item.id} id={item.id} Image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
               ))}
            </div>
        </div>
    </section>
  )
}

export default RelatedProducts