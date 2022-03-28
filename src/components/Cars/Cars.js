import React from 'react';
import './Cars.css';
const Cars = () => {
    const cars = [
        { id: 1, Name: 'Toyota', price: 20000000 },
        { id: 2, Name: 'Hyndai', price: 40975325 },
        { id: 3, Name: 'Farrari', price: 40975325 },
        { id: 4, Name: 'Mahidra', price: 40975325 },
        { id: 5, Name: 'Tata', price: 40975325 },
        { id: 6, Name: 'BMW', price: 40975325 },
        { id: 7, Name: 'Marsetis', price: 40975325 },
        { id: 8, Name: 'Ford', price: 40975325 },
        { id: 9, Name: 'Sujuki', price: 40975325 },
    ];
    return (
        <div className='cars-container'>
            <div className="cards-containers">
                <h3>this is for cars</h3>
            </div>
            <div className="choose-container">
                <h3>choose randomly</h3>
            </div>
        </div>
    );
};

export default Cars; <h2>This is list of cars</h2>