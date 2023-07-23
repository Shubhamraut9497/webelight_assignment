import mongoose from "mongoose";

const ProductSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      category: {
        type: String,
      },
      brand: {
        type: String,
      },
      discount_percentage: {
        type: Number,
      },
      price: {
        type: Number,
      },
      rating: {
        type: Number,
      },
      stock: {
        type: Number,
      },
      thumbnail: {
        type: String,
      },
});
const ProductModel=mongoose.model("ProductSchema",ProductSchema);
export default ProductModel;