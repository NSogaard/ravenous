import React from 'react';
import ReactDOM from 'react-dom/client';

/* 
 * This represents a search bar in the interface. It will have input boxes for a restaurant name and location, a submit button
 * as well as a selector by whcich the user can select how to sort the results. 
 */
function SearchBar() {
    return (
        <div>
            <form className='searchBar'>
                <div className='sbSelector'>
                    <button id='bestMatch' className='sbSelectorButton'>Best Match</button>
                    <button id='highestRated' className='sbSelectorButton'>Highest Rated</button>
                    <button id='mostReviewed' className='sbSelectorButton'>Most Reviewed</button>
                </div>
                <div className='sbTextWrapper'>
                    <input className='sbTextInput' type='text' placeholder='Search Business'/>
                    <input className='sbTextInput' type='text' placeholder='Where?'/>
                </div>
                <input className='sbSubmit' type='submit'/>
            </form>
        </div>
    )
}

/*
 * Note that the state has the following form:
 * {
 *  name: 'inputName',
 *  location: 'locationName',
 *  selectorValue: 'selectorValue'
 * }
*/

export default SearchBar;