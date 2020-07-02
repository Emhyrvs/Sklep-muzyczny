import express from 'express';
import Product from '../models/productModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get("/", async (req, res) => {
  const category = req.query.category ? { category: req.query.category } : {};
 
  const products = await Product.find({ ...category});
  res.send(products);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found." });
  }
});

router.put("/:id", isAuth, isAdmin, async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.Bandname = req.body.Bandname;
    product.Albumname = req.body.Albumname;
    product.price = req.body.price;
    product.image = req.body.image;
    product.data = req.body.data;
    product.count = req.body.count;
    product.category = req.body.category;
 
    
    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res.status(200).send({ message: 'Product Updated', data: updatedProduct });
    }
  }
  return res.status(500).send({ message: ' Error in Updating Product.' });

});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: "Product Deleted" });
  } else {
    res.send("Error in Deletion.");
  }
});


router.post("/", isAuth, isAdmin, async (req, res) => {
  const product = new Product({
    BandName: req.body.BandName,
    AlbumName: req.body.AlbumName,
    price: req.body.price,
    image: req.body.image,
    data: req.body.data,
 count: req.body.count,
    category: req.body.category, 
  
    
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res.status(201).send({ message: 'New Product Created', data: newProduct });
  }
  return res.status(500).send({ message: ' Error in Creating Product.' });
})


export default router;
