import React from 'react';
import ReactDom from 'react-dom/client';

// Generates the bare bones code for a placeholder business using iterator value. Eventually the actual value here will be replaced 
// By real values from the Yelp API.
function Business(
    name='name-plcHolder',
    imgSrc='', 
    address='',
    city='city-plcHolder',
    state='state-plcHolder', 
    zipcode=-1,
    category='category-plcHolder',
    rating='rating-plcHolder',
    reviewCount=-1) {

    return (
        <div className='busWrap'>
            <img className='busName' src={imgSrc} alt='blankImage'/>
            <h1 className='busName' alt={name}>{name}</h1>
            <h2 className='bustType' alt={category}>{category}</h2>
            <text className='busLocation' alt={`${address}-${city}-${state}-${zipcode}`}>{address}, {city}, {state}, {zipcode}</text>
            <text className='busReview' alt={`${rating}-${reviewCount}`}>{name} has a {rating} rating with {reviewCount} review.</text>
        </div>
    );
}

export default {Business};