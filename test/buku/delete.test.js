import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('DELETE /api/buku/:bukuId', () => {
  it('should return 200 when delete buku success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const result = await supertest(app)
      .delete('/api/buku/961027a5-9316-40cb-9726-8592adeaa21f')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when delete buku without token', async () => {
    const result = await supertest(app)
      .delete('/api/buku/961027a5-9316-40cb-9726-8592adeaa21f');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 404 when delete buku with invalid bukuId', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const result = await supertest(app)
      .delete('/api/buku/961027a5-9316-40cb-9726-8592adeaa21f')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  });
});