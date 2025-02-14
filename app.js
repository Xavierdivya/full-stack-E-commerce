import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="container">
            <h1>Simple E-Commerce</h1>
            <div className="products">
                {products.length > 0 ? products.map(product => (
                    <div key={product._id} className="product">
                        <img src={product.imageUrl} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                )) : <p>No products available</p>}
            </div>
        </div>
    );
}

export default App;
