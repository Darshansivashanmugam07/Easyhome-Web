const bcrypt = require('bcryptjs'); // For password hashing
const jwt = require('jsonwebtoken'); // For generating JWT token (if required)

const users = [
  { id: 1, email: 'user@example.com', password: '$2a$10$QkJf9l3me3PzU9y2EKbBoeOByZQ.RFcKhWorFVvn0HhOoIf9M/Z9K' }, // Password: 'password123'
  // Add more users here
];

// Simulate a login function
const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Compare the password with the hashed password
  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) {
      return res.status(500).json({ message: 'Error comparing passwords' });
    }

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create a JWT token (optional)
    // const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });

    // Respond with the user data and token (if you are using JWT)
    res.status(200).json({
      message: 'Login successful',
      user: { id: user.id, email: user.email },
      token: token,
    });
  });
};

module.exports = { loginUser };
