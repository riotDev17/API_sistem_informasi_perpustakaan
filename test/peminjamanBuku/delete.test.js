import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('DELETE /api/peminjaman-buku/:peminjamanBukuId', () => {
  it('should return 200 when delete peminjaman buku success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .delete('/api/peminjaman-buku/f43f548d-4f18-403e-ab70-b55b06dc6bdd')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
  })

  it('should return 401 when delete peminjaman buku without token', async () => {
    const result = await supertest(app)
      .delete('/api/peminjaman-buku/f43f548d-4f18-403e-ab70-b55b06dc6bdd')
      .set('Authorization', `Bearer`);

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  })

  it('should return 401 when delete peminjaman buku with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .delete('/api/peminjaman-buku/f43f548d-4f18-403e-ab70-b55b06dc6bdd')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  })

  it('should return 404 when delete peminjaman buku with peminjamanBukuId not found', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .delete('/api/peminjaman-buku/999')
      .set('Authorization', `Bearer ${token}`);

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  })
})