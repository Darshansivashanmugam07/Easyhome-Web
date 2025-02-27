const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

dotenv.config(); // Load environment variables from .env file

// Connect to the database (make sure connectDB is set up correctly in db.js)
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable Cross-Origin Request Sharing

// Routes
app.use('/api/products', productRoutes); // Products route
app.use('/api/users', userRoutes); // User authentication routes

// Error handling middleware
app.use(errorHandler);

// Set up the server to listen on the specified port (either from .env or default to 5000)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
