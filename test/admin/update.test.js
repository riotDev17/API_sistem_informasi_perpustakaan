import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('PUT /api/admin/{adminId}', () => {

  it('should return 200 when updating admin profile with photo', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const result = await supertest(app)
      .put('/api/admin/63be822f-c3fe-4904-b578-4cf4c2266019')
      .set('Authorization', `Bearer ${token}`)
      .field('username', 'adminkeren')
      .attach('foto_admin', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(200);
    expect(result.body.data).toBeDefined();
    expect(result.body.message).toBeDefined();
  });

  it('should return 200 when updating admin profile without photo', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const result = await supertest(app)
      .put('/api/admin/63be822f-c3fe-4904-b578-4cf4c2266019')
      .set('Authorization', `Bearer ${token}`)
      .field('username', 'adminkeren23')

    expect(result.status).toEqual(200);
    expect(result.body.data).toBeDefined();
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when updating admin with token not found', async () => {
    const result = await supertest(app)
      .put('/api/admin/63be822f-c3fe-4904-b578-4cf4c2266019')
      .set('Authorization', '')
      .field('username', 'adminkeren')
      .attach('foto_admin', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when updating admin profile with token invalid', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');

    const result = await supertest(app)
      .put('/api/admin/63be822f-c3fe-4904-b578-4cf4c2266019')
      .set('Authorization', `Bearer ${token}`)
      .field('username', 'adminkeren')
      .attach('foto_admin', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 404 when updating admin profile with id admin not found', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const result = await supertest(app)
      .put('/api/admin/63be822f-c3fe-4904-b578-4cf4c226601sda')
      .set('Authorization', `Bearer ${token}`)
      .field('username', 'adminkeren23')
      .attach('foto_admin', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  });

  it('should return 409 when updating admin profile with username is exist', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const result = await supertest(app)
      .put('/api/admin/63be822f-c3fe-4904-b578-4cf4c2266019')
      .set('Authorization', `Bearer ${token}`)
      .field('username', 'adminkeren')
      .attach('foto_admin', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(409);
    expect(result.body.message).toBeDefined();
  });
});