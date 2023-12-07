const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bcryptSalt = process.env.BCRYPT_SALT; // Make sure BCRYPT_SALT is defined as an environment variable

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // Correct "require" to "required"
    },
    location: {
        type: String,
        required: true // Correct "require" to "required"
    },
    Number: {
        type: String,
        required: true // Correct "require" to "required"
    },
    email: {
        type: String,
        required: true // Correct "require" to "required"
    },
    password: {
        type: String,
        required: true // Correct "require" to "required"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// UserSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         return next();
//     }
//     const hash = await bcrypt.hash(this.password, Number(bcryptSalt));
//     this.password = hash;
//     next();
// });

module.exports = mongoose.model('User', UserSchema);
