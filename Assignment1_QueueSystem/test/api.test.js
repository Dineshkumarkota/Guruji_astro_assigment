const request = require('supertest');
const app = require('../src/api'); // Ensure this path is correct based on your project structure

describe('User Authentication', () => {
  it('should authenticate user and return a token', async () => {
    const response = await request(app)
      .post('/register') // Change this to your actual endpoint
      .send({ username: 'testUser', password: 'testPassword' }); // Sample payload

    expect(response.status).toBe(200); // Adjust according to your expected response
    expect(response.body).toHaveProperty('token');
  });
});
