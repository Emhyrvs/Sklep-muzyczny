import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct, listProducts, deleteProdcut } from '../actions/productActions';

function ProductsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [BandName, setBandName] = useState('');
  const [AlbumName, setAlbumName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [data, setData] = useState('');
  const [count, setCount] = useState('');
  const [category, setCategory] = useState('');
  
  
  const productList = useSelector(state => state.productList);
  const {products} = productList;

  const productSave = useSelector(state => state.productSave);
  const { loading: loadingSave, success: successSave, error: errorSave } = productSave;

  const productDelete = useSelector(state => state.productDelete);
  const {  success: successDelete } = productDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    return () => {
      //
    };
  }, [successSave, successDelete,dispatch]);

  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setBandName(product.BandName);
    setAlbumName(product.AlbumName);
    setPrice(product.price);
   setCount(product.count);
    setImage(product.image);
    setData(product.data);
    setCategory(product.category);
    
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveProduct({
      _id: id,
      BandName,AlbumName, price, image, data, category,count
 
    }));
  }
  const deleteHandler = (product) => {
    dispatch(deleteProdcut(product._id));
  }
  return <div className="content content-margined">

    <div className="product-header">
      <h3>Products</h3>
      <button className="button primary" onClick={() => openModal({})}>Create Product</button>
    </div>
    {modalVisible &&
      <div className="form">
        <form onSubmit={submitHandler} >
          <ul className="form-container">
            <li>
              <h2>Create Product</h2>
            </li>
            <li>
              {loadingSave && <div>Loading...</div>}
              {errorSave && <div>{errorSave}</div>}
            </li>

            <li>
              <label htmlFor="BandName">
                BandName
          </label>
              <input type="text" name="BandName" value={BandName} id="BandName" onChange={(e) => setBandName(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="AlbumName">
                AlbumName
          </label>
              <input type="text" name="AlbumName" value={AlbumName} id="AlbumName" onChange={(e) => setAlbumName(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="price">
                Price
          </label>
              <input type="text" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="image">
                Image
          </label>
              <input type="text" name="image" value={image} id="image" onChange={(e) => setImage(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="data">
                data
          </label>
              <input type="text" name="data" value={data} id="data" onChange={(e) => setData(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="count">
                Count
          </label>
              <input type="text" name="count" value={count} id="count" onChange={(e) => setCount(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="name">
                Category
          </label>
              <input type="text" name="category" value={category} id="category" onChange={(e) => setCategory(e.target.value)}>
              </input>
            </li>
            
            <li>
              <button type="submit" className="button primary">{id ? "Update" : "Create"}</button>
            </li>
            <li>
              <button type="button" onClick={() => setModalVisible(false)} className="button secondary">Back</button>
            </li>
          </ul>
        </form>
      </div>
    }


    <div className="product-list">

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>AlbumName</th>
            <th>BandName</th>
            <th>Price</th>
            <th>Category</th>
            <th>data</th>
            <th>count</th>
            
          </tr>
        </thead>
        <tbody>
          {products.map(product => (<tr key={product._id}>
            <td>{product._id}</td>
            <td>{product.BandName}</td>
            <td>{product.AlbumName}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.data}</td>
            <td>{product.count}</td>
            <td>
              <button className="button" onClick={() => openModal(product)} >Edit</button>
              {' '}
              <button className="button" onClick={() => deleteHandler(product)} >Delete</button>
            </td>
          </tr>))}
        </tbody>
      </table>

    </div>
  </div>
}
export default ProductsScreen;