const mongo = require("mongoose");
const blogSchema = require("../model/blog.model");
const option = {
    useNewUrlParser:true,
    useUnfieldTopology:true,
    useCreateIndex:true
};

mongo.connect("mongodb://localhost:27017/blogwap");

const createData =async (data)=>{
const collection =   new blogSchema(data);
const data_res =await collection.save();
return data_res;
}

const getAll = async ()=>{
   const data = await blogSchema.find();
   return data;
}

const getByQuery =async (query)=>{
    const data = await blogSchema.find(query);
   return data;
}

module.exports = {
    createData  : createData,
    getAll : getAll,
    getByQuery : getByQuery
};