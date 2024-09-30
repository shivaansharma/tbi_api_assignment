import Blog from "../schema/blog.schema.js"

export const createBlog = async function (req, res) {
    const { title, body, author } = req.body;
    try {
     
        if (!title || !body || !author) {
            throw new Error("Title, body, or author is missing");
        }

       
        const newBlog = new Blog({
            title,
            body,
            author
        });

      
        await newBlog.save();

       
        res.status(200).json({ message: "Blog created successfully" });
    } catch (error) {
      
        res.status(400).json({ message: "Error in creating blog", error: error.message });
    }
};