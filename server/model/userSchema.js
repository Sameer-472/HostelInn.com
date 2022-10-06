import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please Provide a Name'],
      unique: [false],
    },
    email: {
      type: String,
      required: [true, 'Please provide an Email!'],
      unique: [true, 'Email Exist'],
    },

    password: {
      type: String,
      required: [true, 'Please provide a password!'],
      unique: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    confirmationCode: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('user', userSchema);

export default User;
