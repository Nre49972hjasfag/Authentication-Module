// Logic: Handles direct interaction with the database. No business logic lives here.

const db = require('../../shared/database');

class AuthRepository {
  async createUser(userData) {
    // Structural representation of a User entity
    const userEntity = {
      id: Date.now().toString(),
      email: userData.email,
      password: userData.password, // In production, this must be hashed
      createdAt: new Date()
    };
    
    return await db.save(userEntity);
  }

  async findUserByEmail(email) {
    return await db.findByEmail(email);
  }
}

module.exports = new AuthRepository();

