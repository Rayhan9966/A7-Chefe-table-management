import React from 'react';

const SingleProduct = ({product, handleCart}) => {
    console.log(handleCart);
    return (
        <div>
            <div className="card border  gap-4 mt-3">
            
                    <figure><img className="rounded-xl img" src={product.recipe_image} alt="Shoes" /></figure>
                    <p className='text-start font-bold'>{product.recipe_id}</p>
                    <h1 className='font-bold text-2xl text-start'>{product.recipe_name.slice(0.10)}</h1>
                    <p className='text-start'>{product.short_description}
                    </p><br />
                    <p className=' font-bold text-2xl text-start'>Ingredients: 6</p>
                    
                    <p className='text-start'>{product.ingredients}</p>
                    <div className="flex mt-4 gap-4">
                        <span className="flex"><img src="https://i.postimg.cc/sDY7rcXt/Frame.png" alt="" /> <p> {product.preparing_time}</p> </span>
                        <span className="flex"><img src="https://i.postimg.cc/dtLpNhVk/Frame-1.png" alt="" /> <p> {product.calories}</p> </span>

                    </div>
                    <div className="card-body">

                        <div className="card-actions justify-start items-start">
                            <button onClick={(e)=>handleCart(product)} className="button mt-4">Want to Cook</button>
                        </div>
                    </div>
                
            </div>
           
            
        </div >

      

    );
};

export default SingleProduct;