import React from 'react'
import "./card.css"

const card = () => {
		return (
		<div className="card">
  <div className="product-card">
    <img src="https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg" alt="Shirt Image" class="product-image"/>
    <div className="product-info">
      <h2 className="product-title">Cotton T-Shirt</h2>
      <p className="product-price">₹799</p>
      <a href="#" className="buy-button">Buy Now</a>
    </div>
</div>
		</div>
		)
}

export default card