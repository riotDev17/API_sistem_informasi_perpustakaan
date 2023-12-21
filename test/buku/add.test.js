import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';


describe('POST /api/buku', () => {
  it('should return 200 when add buku', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const formData = {
      judul_buku: 'Buku Thomas',
      pengarang: 'Pengarang 1',
      penerbit: 'Penerbit 1',
      tahun_terbit: 2021,
      stok_buku: 10,
      deskripsi: 'Deskripsi 1',
      id_rak_buku: '4dad87ae-0642-4e99-89fc-848047279afd',
    };

    const result = await supertest(app)
      .post('/api/buku')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_buku', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
  });

  it('should return 400 when add buku with invalid form data', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const formData = {
      judul_buku: 'Buku Thomas 2',
      pengarang: 'Pengarang 1',
      penerbit: 'Penerbit 1',
      tahun_terbit: '2021sda',
      stok_buku: '10sadas',
      deskripsi: 'Deskripsi 1',
      id_rak_buku: '4dad87ae-0642-4e99-89fc-848047279afd',
    };

    const result = await supertest(app)
      .post('/api/buku')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_buku', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when add buku without token', async () => {
    const formData = {
      judul_buku: 'Buku Thomas',
      pengarang: 'Pengarang 1',
      penerbit: 'Penerbit 1',
      tahun_terbit: 2021,
      stok_buku: 10,
      deskripsi: 'Deskripsi 1',
      id_rak_buku: '4dad87ae-0642-4e99-89fc-848047279afd',
    };

    const result = await supertest(app)
      .post('/api/buku')
      .field(formData)
      .attach('foto_buku', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401  when add buku with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');

    const formData = {
      judul_buku: 'Buku Thomas',
      pengarang: 'Pengarang 1',
      penerbit: 'Penerbit 1',
      tahun_terbit: 2021,
      stok_buku: 10,
      deskripsi: 'Deskripsi 1',
      id_rak_buku: '4dad87ae-0642-4e99-89fc-848047279afd',
    };

    const result = await supertest(app)
      .post('/api/buku')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_buku', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 409 when add buku with judul buku already exist', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const formData = {
      judul_buku: 'Buku Thomas',
      pengarang: 'Pengarang 1',
      penerbit: 'Penerbit 1',
      tahun_terbit: 2021,
      stok_buku: 10,
      deskripsi: 'Deskripsi 1',
      id_rak_buku: '4dad87ae-0642-4e99-89fc-848047279afd',
    };

    const result = await supertest(app)
      .post('/api/buku')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_buku', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(409);
    expect(result.body.message).toBeDefined();
  });
});