import { Router } from "express";
import { createBlog } from "./methods/createBlog.js";
import { showBlog } from "./methods/showBlog.js";
import { deleteBlog } from "./methods/DeleteBlog.js";
import { SearchById } from "./methods/showBlogById.js";
import { updateBlog } from "./methods/updateBlog.js";
const router = Router();
router.post('/create/blog',createBlog)
router.get('/get/blog',showBlog)
router.delete('/delete/blog/:id', deleteBlog); 
router.get('search/blog/:id',SearchById)
router.put('/update/blog/:id', updateBlog);
export default router