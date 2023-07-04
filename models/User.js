const mongoose = require('mongoose');

// user schema with username & password
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a username'],
        unique: true
    },
    password: {
        type: String, 
        required: [true, 'Please provide a password'],
        select: false,
    }
});

// if the password is modified (created, reset, updated) - hash it
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

// create the model, or retrieve it if it already exists
const User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User;