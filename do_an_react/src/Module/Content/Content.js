import React, { useEffect, useState } from 'react';
import ProductList from '../Product/ProductList';
import axios from 'axios';

const Content = () => {

    const [list_item, SetListItem] = useState([
      {
        'id': 1,
        'type': "Action Games",
        'title': "Nulla elementum nunc tempus.",
        'image': "images/t1.jpg",
        'price': 800000
      },
      {
        'id': 2,
        'type': "Racing Games",
        'title': "Nulla elementum nunc tempus.",
        'image': "images/t3.jpg",
        'price': 950000
      },
      {
        'id': 3,
        'type': "3D Games",
        'title': "Nulla elementum nunc tempus.",
        'image': "images/t4.jpg",
        'price': 850000
      },
      {
        'id': 4,
        'type': "Arcade Games",
        'title': "Nulla elementum nunc tempus.",
        'image': "images/t2.jpg",
        'price': 1200000
      }
    ]);

    useEffect(() => {
      axios.get('http://localhost:4000/products')
      .then((response) => {
        console.log(response);
        SetListItem(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);

    return (
        <div className="content">
        <div className="container">
          <div className="top-games">
            <h3>Top Games</h3>
            <span></span>
          </div>
          <div className="top-game-grids">
            
            <ProductList list_item={list_item} />
            
          </div>
        </div>
      </div>
    );
};

export default Content;