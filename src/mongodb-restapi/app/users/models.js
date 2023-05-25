import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Field name should be there!"],
    minlength: 3,
  },
  role: {
    type: String,
    required: [true, "Field role should be there!"],
  },
  address: {
    type: String,
    required: [true, "Field address should be there!"],
  },
  status: {
    type: Boolean,
    default: true,
  },
  image_url: {
    type:String,
  },
  date: { type: Date, default: Date.now },
});

const User = mongoose.model('users', UserSchema)
export default User