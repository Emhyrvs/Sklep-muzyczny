import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {
 
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category,dispatch]);

  

  return <>
    {category &&
      <h2>{category}</h2>}

 
    
    
    {loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
        <ul className="products">
          {
            products.map(product =>
              <li key={product._id}>
                <div className="product">
                  <Link to={'/product/' + product._id}>
                    <img className="product-image" src={product.image} alt="product" />

                  </Link>
                  <div className="product-AlbumName">
                    <Link to={'/product/' + product._id}>{product.AlbumName}</Link>
                  </div>
                  <div className="product-BandName">{product.BandName}</div>
                  
                  <div className="product-category">{product.category}</div>
                  <div className="product-data">{product.data}</div>
                  <div className="product-price">{product.price}$</div>
                 
                </div>
              </li>)
          }
        </ul>
    }
  </>

}
export default HomeScreen;