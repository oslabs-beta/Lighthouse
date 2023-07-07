import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        // Connect to the Database
        await dbConnect();

        const { username, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ username });

        if (!user) {
          return res.status(400).json({ error: 'Invalid Username' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return res.status(400).json({ error: 'Invalid Password' });
        }

        // If login successful, create JWT
        const token = jwt.sign(
          { id: user._id }, // Payload
          process.env.JWT_SECRET, // Secret
          { expiresIn: '1h' } // Options
        );

        // Respond with token
        return res.status(200).json({ token });
      } catch (err) {
        return res.status(500).json({ error: 'Server Error' });
      }
    default:
      return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
