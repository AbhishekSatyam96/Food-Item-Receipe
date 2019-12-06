import React from 'react';
import "./Recipe.css";
const Recipe = (props) => {
    return (
        <div className='arrange'>
            <h1>Name: {props.title}</h1>
            <ol>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h3>Total Calories: {props.calories}</h3>
            <img className='image' src={props.image} alt="Image not found" />
        </div>
    );
}
export default Recipe;