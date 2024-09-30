import Blog from "../schema/blog.schema.js";

export const deleteBlog = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBlog = await Blog.findByIdAndDelete(id); 

       
        if (!deletedBlog) {
            return res.status(400).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog deleted successfully", deletedBlog });
    } catch (error) {
        res.status(400).json({ message: "Error deleting blog", error: error.message });
    }
};