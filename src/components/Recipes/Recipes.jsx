import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("./recipesData.json")
            .then(res => res.json())
            // .then(data=> console.log(data))
            .then(data => setRecipes(data))

    }, [])
   

    const handleCart = (p) => {
        const isExist=cart.find(item => item.recipe_id == p.recipe_id);
       if(!isExist){
        setCart([...cart,p]);
       }
       else{
    
      alert("Already Added")
       }
       
    };
    const handleDelete =(recipe_id) =>{
        // console.log(recipe_id);
        const newCart=cart.filter(item => item.recipe_id !=recipe_id);
        setCart(newCart);
    }
    // console.log(cart);
    return (
        <div className="">
            <h1 className="text-4xl font-bold mt-5">Total Recipe: {recipes.length}</h1>
            <div className="main-container text-xl mr-4 flex gap-8">
                <div className="cards-container cards flex  gap-4 grid grid-cols-2">

                    {
                        recipes.map((pd) => (
                            <SingleProduct product={pd} handleCart={handleCart}>

                            </SingleProduct>)
                        )

                    }

                </div>
                <div className="cart-container text-2xl">
                    <h1>Want to cook: 01</h1>
                    <div className="cart-title flex gap-10">
                        <p>No</p>
                        <h5>Name</h5>
                        <h5>Time</h5>
                        <h5>Calories</h5>
                    </div>
                    <div className="cart-info">
                        {
                            cart.map((item,index) => (
                                <div className="flex gap-7 mt-5">
                                    <p>{index+1}</p>
                                    <h5>{item.recipe_name.slice(0,10)}</h5>
                                    <h5>{item.preparing_time}</h5>
                                    <h5>{item.calories}</h5>
                                    <button onClick={()=> handleDelete(item.recipe_id)} className="button">Prepairing</button>
                                </div>

                            ))

                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Recipes;