import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import axios from 'axios';
import Item from '../Item/Item';

const NewCollections = () => {
  const [newCollections, setNewCollections] = useState([]);

  useEffect(() => {
    const fetchNewCollections = async () => {
      try {
        // Fetch only "new" products from the backend API
        const response = await axios.get("http://localhost:5000/api/products?type=new");
        setNewCollections(response.data);
      } catch (error) {
        console.error("Error fetching new collections:", error.message);
      }
    };
    fetchNewCollections();
  }, []);

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newCollections.map((item) => (
          <Item
            key={item._id} 
            id={item._id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollections;
