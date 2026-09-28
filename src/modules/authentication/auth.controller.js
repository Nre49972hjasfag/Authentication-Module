// Logic: Handles HTTP networking, request parsing, and status code delivery.

const authService = require('./auth.service');

class AuthController {
  async handleRegister(req, res) {
    try {
      const { email, password } = req.body;
      
      // Hand over execution to the core business logic layer
      const newUser = await authService.registerUser(email, password);
      
      // Return clear HTTP response
      return res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: { id: newUser.id, email: newUser.email }
      });
    } catch (error) {
      // Return precise HTTP error statuses depending on nature of error
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = new AuthController();
