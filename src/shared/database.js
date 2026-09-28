// Mocking a database connection utility

const mockDbConnection = {
  users: [], // In-memory database for demonstration
  async save(user) {
    this.users.push(user);
    return user;
  },
  async findByEmail(email) {
    return this.users.find(user => user.email === email) || null;
  }
};

module.exports = mockDbConnection;

// This layer provides services that the entire application can use. 
// It does not import anything from the features.
