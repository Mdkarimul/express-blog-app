const express = require("express");
const router = express.Router();
const blogController = require("../controller/blog.controller");



router.get('/',(request,response)=>{
//response.send("Get request !");
blogController.getAllBlogs(request,response);
});

router.get('/:category',(request,response)=>{
    //response.send("Get request !");
    blogController.getBlogsByCategory(request,response);
    });

router.post('/',(request,response)=>{
    // response.json(request.body);
    // console.log(request.file);
    blogController.createBlog(request,response);
    });

    router.put('/',(request,response)=>{
        response.send("Put request !");
        });

        router.delete('/',(request,response)=>{
            response.send("Delete request !");
            });  
            
            module.exports = router;