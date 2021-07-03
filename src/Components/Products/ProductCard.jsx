import React from 'react'
import './ProductCard.scss'
const ProductCard = ({img,title}) => {
    return (
        <div className="product-card">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <div className="product-btn">
                <a href="" className="btn">Order Now</a>
            </div>
        </div>
    )
}

export default ProductCard
