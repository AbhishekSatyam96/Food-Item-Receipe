import React, { useState, useEffect } from 'react';
import Recipe from "./Recipe";
import "./App.css";
const App = () => {
    const APP_ID = 'b6ad59cd';
    const APP_KEY = 'b6c02e8a4f856d98fbfdc8e2dd9170ce';
    const [receipes, setReceipe] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('');
    useEffect(() => {
        getReceipe();
    }, [query]);
    const getReceipe = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setReceipe(data.hits);
        /* console.log(data.hits);

         const len = data.hits.length;
         console.log(len);
         if(len==0){
             return <h1>Please Enter valid food or check your speeling mistake</h1>
         }*/
    };
    const updateSearch = e => {
        setSearch(e.target.value);
        // console.log(search);
    };
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    return (
        <div className='App'>
            <h1 style={{textAlign: 'center', color: 'red'}}>A new Startup for Simran</h1>
            <h2 style={{ textAlign: 'center' }}> Food Items Recipe </h2>
            <h3 style={{ textAlign: 'center' }}>You can search any food items here to get their recipe....</h3>
            <form onSubmit={getSearch} className='search-form'>
                <input className='search-bar' type='text' value={search} onChange={updateSearch}
                    placeholder="Type here food items... (ex-chicken,.. etc)" />
                <button className='search-button' type='submit'>Search</button>
            </form>
            <div className='receipe'>
                {receipes.map(receipe => (
                    <Recipe key={receipe.recipe.label} title={receipe.recipe.label} calories={receipe.recipe.calories}
                        image={receipe.recipe.image} ingredients={receipe.recipe.ingredients} />
                ))}
            </div>
            <footer style={{ textAlign: 'center' }}> &copy; <strong>Created by Abhishek Satyam</strong></footer>
        </div>
    );
};
export default App;