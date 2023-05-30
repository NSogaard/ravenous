import React from 'react';
import ReactDom from 'react-dom/client';
import Business from './Business';

// Generates a list of Business components from the Business.js file. They are currently just displayed as a list using <ul>.
function BusinessList(busList=[<h3>placeholder</h3>]) {
    return(<ul>{busList}</ul>)
}

export default {BusinessList};