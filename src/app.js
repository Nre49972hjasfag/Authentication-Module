const express = require('express');
const authController = require('./modules/authentication/auth.controller');

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Route routing layer targets individual module handlers directly
app.post('/api/auth/register', (req, res) => authController.handleRegister(req, res));

// Export or listen on port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
