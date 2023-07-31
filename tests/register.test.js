const request = require('supertest');
const app = require('../server/server.js'); // Import your app

describe('User Registration', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'testpassword',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.username).toEqual('testuser');
  });

  it('should not create a user with the existing email', async () => {
    const res = await request(app)
      .post('/api/register')
      .send({
        username: 'testuser2',
        email: 'test@example.com',
        password: 'testpassword',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('User with this email already exists');
  });

  it('should not create a user without required fields', async () => {
    const res = await request(app)
      .post('/api/register')
      .send({
        username: 'testuser2',
        password: 'testpassword',
      });
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('All fields are required');
  });
});
