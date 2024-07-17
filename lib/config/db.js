import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://ftyelbi:5vWE5kXXVDqvJRXE@cluster0.qim6s0a.mongodb.net/blog-app');
    console.log("DB Connected");
}
