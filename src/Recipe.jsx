import React from 'react';
import styles from './recipe.module.css';

let Recipe=({label, calori, image, ingredients})=>{
return(
    <div className={styles.recipe}>
        <h1 className={styles.heading}>{label}</h1>
        <ol><strong>Ingredients</strong> {ingredients.map(ingredient => (
            <li>{ingredient}</li>
        ))}</ol>
        <p><strong>Calories- </strong> {calori}</p>
        <img className={styles.image} src={image} alt='File not supported'/>
    </div>
)

}

export default Recipe