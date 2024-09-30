import Blog from "../schema/blog.schema.js";

export async function updateBlog(req, res) {
    const { id } = req.params; 
    const { title, body, author } = req.body; 

    try {
       
        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            { title, body, author }, 
            { new: true, runValidators: true } 
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog updated successfully", updatedBlog });
    } catch (error) {
        res.status(500).json({ message: "Error updating blog", error: error.message });
    }
}