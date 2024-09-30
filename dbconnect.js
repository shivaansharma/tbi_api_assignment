import mongoose from "mongoose";
async function connect() {
    await mongoose.connect('mongodb+srv://shivaansharma16:saxsux69@cluster0.bb358.mongodb.net/');
}
export default connect