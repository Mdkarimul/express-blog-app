const database = require("../database/db");
const createBlog =async (request,response)=>{
  if(!request.file)
  {
 response.status(404);
 response.json({
   type : "image-validation",
   field : "image",
   message : "please select a file"
 });
  }
   const data = request.body;
   const fileInfo = request.file;
   data['image'] = fileInfo.destination+"/"+fileInfo.filename;
   try {
   const data_res = await database.createData(data);
   response.status(200);
   response.json(data_res);
   }catch(error)
   {
     let field = [];
    response.status(409);
    //response.json(error);
    if(error.code && error.code==11000)
    {
    response.json({
      type:"unique",
      message : "Title field is unique !",
      field : "title"
    });
    }
    else
    {
      for(let key in error.errors)
      {
      field.push({
        name : key,
        message :error.errors[key].message, 
      });
      }
      response.json({
        type :"required",
        field : field
      });
    }
   }
}

const getAllBlogs =async (request,response)=>{
  const data_res = await database.getAll();
  if(data_res.length !=0)
  {
    response.status(200);
    response.json(data_res);
  }
  else
  {
    response.status(404);
    response.json({
      message :  "data not found !"
    });
  }
}

const getBlogsByCategory =async (request,response)=>{
const query  ={
  category : request.params.category
};
const data_res = await database.getByQuery(query);
if(data_res.length !=0)
{
  response.status(200);
  response.json(data_res);
}
else
{
  response.status(404);
  response.json({
    message : "Data not found !"
  });
}
}


module.exports = {
  createBlog : createBlog,
  getAllBlogs:getAllBlogs,
  getBlogsByCategory : getBlogsByCategory
};