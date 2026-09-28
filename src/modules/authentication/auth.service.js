// Logic: The application "brain". Enforces business rules and validation.

const authRepository = require('./auth.repository');

class AuthService {
  async registerUser(email, password) {
    // Rule 1: Validate payload data exists
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Rule 2: Business constraint - Check if user already exists
    const existingUser = await authRepository.findUserByEmail(email);
    if (existingUser) {
      throw new Error('Email is already registered');
    }

    // Rule 3: Save to infrastructure layer
    return await authRepository.createUser({ email, password });
  }
}

module.exports = new AuthService();
