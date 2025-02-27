import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  console.log(props);
  const { addToCart } = useContext(ShopContext);

  if (!product) {
    return <div className="productdisplay">Product data not available.</div>;
  }

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star" />
          <p>({product.reviews || 122})</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price || product.price + 500}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description || "No description available for this product."}
        </div>
        {product.sizes && product.sizes.length > 0 && (
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              {product.sizes.map((size, index) => (
                <div key={index}>{size}</div>
              ))}
            </div>
          </div>
        )}
        <button onClick={() => addToCart(product._id)}>ADD TO CART</button>
        <p className='productdisplay-right-category'>
          <span>Category :</span> {product.category || "Uncategorized"}
        </p>
        <p className='productdisplay-right-category'>
          <span>Tags :</span> {product.tags ? product.tags.join(", ") : "No tags available"}
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
