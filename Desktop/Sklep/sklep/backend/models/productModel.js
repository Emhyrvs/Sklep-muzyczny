import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    BandName: { type: String, required: true },
    AlbumName: {type: String, required: true,},
    price: {type:Number,required:true},
    image: { type: String, required: true },
    data: {type: String, required:true },
    count: {type:Number,required:true},
    category: { type: String, required: true },
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;
