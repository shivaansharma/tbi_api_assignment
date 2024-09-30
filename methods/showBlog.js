import Blog from "../schema/blog.schema.js";

export async function showBlog(req,res) {
    const blog = await Blog.find();
    try {
        if(!blog){
            throw new Error("no blogs exist")
        }
        res.status(200).json({blog})
    } catch (error) {
        res.status(200).json({message:"trouble in getting blogs",err:error.message})
    }
}

