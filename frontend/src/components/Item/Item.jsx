import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  // const images = document.querySelectorAll('.item');
  // images.forEach((image) => {
  //   image.width=350;
  //   image.height=418;
  // });
  return (
    <div className='item'>
      <Link to={`/product/${props.id || props._id}`}><img onClick={() => window.scrollTo(0, 0)} src={props.image} alt={props.name} /></Link>
      <p>{props.name}</p>
      {/* <div className="item-prices">
        <div className="item-price-new">
           ${props.price}
        </div>
        <div className="item-price-old">
           ${props.price}
        </div>
      </div> */}
    </div>
  );
}

export default Item;
