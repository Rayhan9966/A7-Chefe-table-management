import { useEffect, useState } from "react";


const Recipes = () => {
    const [ recipes, setRecipes] = useState([]);

    useEffect(() =>{
fetch("./recipesData.json")
.then(res=> res.json())
// .then(data=> console.log(data))
.then(data => setRecipes(data))

    },[])
    console.log(recipes);
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Recipe: {recipes.length}</h1>



        </div>
    );
};

export default Recipes;