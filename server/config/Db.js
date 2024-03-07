import mongoose from "mongoose";
const dbConnection = () => {
  mongoose.connect('mongodb://localhost:27017/SocialMedia').then(() => {
    console.log('DataBase is connected successfully')
  });
};

export { dbConnection };