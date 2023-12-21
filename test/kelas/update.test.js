import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';

describe('PUT /api/kelas/:kelasId', () => {
  it('should return 200 when update kelas success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .put('/api/kelas/beed3788-9672-4ccf-acf6-ac944fae4dbf')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_kelas: 'Kelas 2 A',
      });

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
  });

  it('should return 401 when update kelas without token', async () => {
    const result = await supertest(app)
      .put('/api/kelas/beed3788-9672-4ccf-acf6-ac944fae4dbf')
      .send({
        nama_kelas: 'Kelas 1',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when update kelas with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');
    const result = await supertest(app)
      .put('/api/kelas/beed3788-9672-4ccf-acf6-ac944fae4dbf')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_kelas: 'Kelas 1',
      });

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 404 when update kelas with id not found', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .put('/api/kelas/999')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_kelas: 'Kelas 1',
      });

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  });

  it('should return 409 when update kelas with nama_kelas already exist', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);
    const result = await supertest(app)
      .put('/api/kelas/beed3788-9672-4ccf-acf6-ac944fae4dbf')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_kelas: 'Kelas 2 A',
      });

    expect(result.status).toEqual(409);
    expect(result.body.message).toBeDefined();
  });
});