import Blog from "../schema/blog.schema.js";

export async function SearchById(req, res) {
    const { id } = req.params;

    try {
     
        const blog = await Blog.findById(id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving blog", error: error.message });
    }
}