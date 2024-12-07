import { useState } from "react";
import product_img from '../../assets/product_img.png'

const MovingItems = () => {
    // State to track the active slide (0, 1, 2, 3 for 16 divs with 4 divs per slide)
  const [activeSlide, setActiveSlide] = useState(0);

  const products = [
    'Macbook Pro','Iphone14 Pro','Zoom 75','Samsung Galaxy Fold',
    'Macbook Pro1','Iphone14 Pro1','Zoom 75 1','Samsung Galaxy Fold1',
    'Macbook Pro2','Iphone14 Pro2','Zoom 75 2','Samsung Galaxy Fold2',
  ]
  
  const productsPerSlide = 4;
  const totalDots = Math.ceil(products.length / productsPerSlide); // Calculate the total number of dots

  return (
  <>
    <div className="relative w-full bg-white rounded-xl shadow border border-[#ced4da] pb-4">
        <div className="px-7 my-6 text-black text-lg font-semibold font-plus_jakarta leading-snug">Fast Moving Items</div> 

        <div className="flex flex-col w-full overflow-hidden gap-6">

            <div className="flex ml-7 min-w-min transition-transform duration-500 justify-start gap-4"
            style={{
                transform: `translateX(-${activeSlide*(175*4+24*3)}px)`, // Adjust this to fit the product display
              }}>
                {products && products.map((product,index)=> (
                    
                    <div key={index} className="flex w-[175px] rounded shadow px-4 py-[11.5px] my-1  items-center gap-[5.2px]">
                        <img src={product_img} alt="product" className="h-[23px] rounded-full"/>
                        <span className="text-[9.87px] font-semibold font-plus_jakarta leading-3 whitespace-nowrap overflow-hidden text-ellipsis">{product}</span>
                    </div>
                ))                
                }
            </div>

            <div className="flex gap-2.5 justify-center mt-4">
                {Array.from({ length: totalDots }).map((_, index) => (
                <div
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                    activeSlide === index ? "bg-blue-500" : "bg-[#e6e3e3]"
                    }`}
                />
                ))}
            </div>
        </div>
    </div>  
  </>

  )}

export default MovingItems
