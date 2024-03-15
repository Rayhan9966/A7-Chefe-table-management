import { useEffect, useState } from "react";


const Recipes = () => {
    const [ recipes, setRecipes] = useState([]);

    useEffect(() =>{
fetch('recipe.json')
.then(res=> res.json())
.then(data => setRecipes(data))

    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Recipe: {recipes.length}</h1>
        </div>
    );
};

export default Recipes;