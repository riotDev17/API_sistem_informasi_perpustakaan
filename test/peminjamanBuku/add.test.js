import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('POST /api/peminjaman-buku', () => {
  it('should return 200 when add peminjaman buku success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .post('/api/peminjaman-buku/04b988c3-5ae5-44af-afa0-e3b8cddeb288')
      .set('Authorization', `Bearer ${token}`)
      .send({
        id_buku: '4d9f5033-e5e1-4ab1-80ca-e1ea1b7caaf3',
      });

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
  });

  it('should return 400 when add peminjaman buku without id_buku', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .post('/api/peminjaman-buku/04b988c3-5ae5-44af-afa0-e3b8cddeb288')
      .set('Authorization', `Bearer ${token}`)
      .send({});

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when add peminjaman buku without token', async () => {
    const result = await supertest(app)
      .post('/api/peminjaman-buku/04b988c3-5ae5-44af-afa0-e3b8cddeb288')
      .set('Authorization', `Bearer`)
      .send({});

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when add peminjaman buku with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .post('/api/peminjaman-buku/04b988c3-5ae5-44af-afa0-e3b8cddeb288')
      .set('Authorization', `Bearer ${token}`)
      .send({
        id_buku: '4d9f5033-e5e1-4ab1-80ca-e1ea1b7caaf3',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });
});