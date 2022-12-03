const request = require('supertest');

const { app, server } = require('../src/index');

afterAll(() => {
  server.close();
});

describe('when calling GET /products endpoint', () => {
  it('sholud return a 200 status code', async () => {
    const response = await request(app).get('/products');

    expect(response.status).toBe(200);
  });

  it('should return an array of products', async () => {
    const response = await request(app).get('/products');

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          price: expect.any(Number),
        }),
      ])
    );
  });
});

describe('when calling POST /procucts endpoint', () => {
  it('should return a 201 status code when a product is created', async () => {
    const response = await request(app).post('/products').send({
      name: 'Cat',
      description: 'A sad cat',
      imageUrl: '',
      price: 1000,
    });

    expect(response.status).toBe(200);
  });
});
