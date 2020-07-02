import React, { useEffect,useState} from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props)
{  const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error} = productDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
          //
        };
      }, [dispatch,props.match.params.id]);
      const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
      }
  
    return <div>
        <div>
            <Link to="/">Back to the result</Link>
        </div>
        {loading ? <div>Loading...</div> :
      error ? <div>{error} </div> :
        (
       <div className='details'> 
       <div className="details-image">

       <img alt="product" src={product.image}/>
       </div>
       <div className='details-info'>
<ul>
    <li><h4> Album Name :  {product.BandNamse}</h4></li>
    <li><h1> Band Name:{product.BandName}</h1></li>
    <li>Data: {product.data}</li>
    <li>Count: {product.count}</li>
    <li>Price: {product.price}$</li>
</ul>
</div>
        
        <div className="details-action">
            <ul>
                <li>
                    Price: {product.price}
                </li>
               
                  <li>
                  Status: {product.count> 0 ? "In Stock" : "Unavailable."}
                </li>
                <li>
                  Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                    {[...Array(product.count).keys()].map(x =>
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    )}
                  </select>
                </li>
                <li>
                  {product.count > 0 && <button onClick={handleAddToCart} className="button primary" >Add to Cart</button>
                  }
                </li>
            </ul>

        </div>
        </div>
        )
}

        </div>
}

export default ProductScreen;