import ProductModel from "../models/Product.js";
export const addProduct = async (req, res) => {
    try{
        const {
          title,
          description,
          brand,
          discount_percentage,
          price,
          rating,
          stock,
          thumbnail
        } = req.body;

        const postData=await ProductModel.create({
          title,
          description,
          brand,
          discount_percentage,
          price,
          rating,
          stock,
          thumbnail,
        })
        res.status(200).json(postData);
    }
    catch(err){
        res.status(500).json({mesage:"Internal Server error"});
    }
};
export const getData = async (req, res) => {
    try {
      const productData = await ProductModel.find({});
      if (!productData || productData.length === 0) {
        res.status(204).send(); // Send 204 - No Content status if no data found
      } else {
        res.status(200).json(productData); // Send 200 - OK status with the data
      }
    } catch (err) {
      res.status(500).json({ message: "Internal Server error" });
    }
};
export const getSingleData=async(req,res)=>{
    try{
        const {id}=req.params;
        console.log(id);
        const singleProduct=await ProductModel.findById(id);
        res.status(200).json(singleProduct);
    }
    catch(err){
        res.status(500).json("Internal server error");
    }
  
}