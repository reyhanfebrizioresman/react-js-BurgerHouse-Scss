import React from 'react';
import './Products.scss';
import ProductCard from './ProductCard';
import img1 from '../Images/s1.png'
import img2 from '../Images/s2.png'
import img3 from '../Images/s1.png'

const Products = () => {
    return (
        <div className="products-container" id="products">
            <h2>CHOOSE & ENJOY</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita illo omnis cupiditate adipisci.</p>
            <div className="card-wrapper">
                <ProductCard img={img1} title="Luger Burger"/>
                <ProductCard img={img2} title="Luger Burger"/>
                <ProductCard img={img3} title="Luger Burger"/>
            </div>
        </div>
    )
}

export default Products
