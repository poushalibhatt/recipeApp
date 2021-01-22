import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css'; 


function App() {
  let APP_ID= "aca47902";
  let APP_Keys= "5e69039a0a76b58929dc28a01dbf5ce7";

  const [recipes, setRecipe]=useState([])
  const [search, setSearch]=useState('')
  const [result, setResult]=useState('chicken')

  useEffect(()=>{
    getRecipes()
  },[result])

  let getRecipes=async()=>{
    let response= await fetch(`https://api.edamam.com/search?q=${result}&app_id=${APP_ID}&app_key=${APP_Keys}`)
    let data= await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
 }

 let getResult=(e)=>{
   e.preventDefault()
   setResult(search)
   setSearch('')
 }

  return (
    <div className="App">
      <form id='form-search' onSubmit={getResult}>
        <input id='input-search' type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button id='button-search' type='submit' className="btn btn-dark">Search</button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe => (
        <Recipe label={recipe.recipe.label} calori={recipe.recipe.calories} image={recipe.recipe.image}
        totalTime={recipe.recipe.totalTime}
        />
      ))}
      </div>
    </div>
  )
      }

export default App;
