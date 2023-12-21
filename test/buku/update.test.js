import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';


describe('PUT /api/buku/:bukuId', () => {
  it('should return 200 when update buku success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const formData = {
      judul_buku: 'Buku Thomas Update',
      pengarang: 'Pengarang 1',
      penerbit: 'Penerbit 1',
      tahun_terbit: 2021,
      stok_buku: 10,
      deskripsi: 'Deskripsi 1',
      id_rak_buku: '4dad87ae-0642-4e99-89fc-848047279afd',
    };

    const result = await supertest(app)
      .put('/api/buku/961027a5-9316-40cb-9726-8592adeaa21f')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_buku', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBeDefined();
  });

  it('should return 400 when update buku with invalid form data', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const formData = {
      judul_buku: 'Buku Thomas Update',
      pengarang: 'Pengarang 1',
      penerbit: 'Penerbit 1',
      tahun_terbit: '2021sda',
      stok_buku: '10sadas',
      deskripsi: 'Deskripsi 1',
      id_rak_buku: '4dad87ae-0642-4e99-89fc-848047279afd',
    };

    const result = await supertest(app)
      .put('/api/buku/961027a5-9316-40cb-9726-8592adeaa21f')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_buku', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(400);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when update buku without token', async () => {
    const formData = {
      judul_buku: 'Buku Thomas Update',
      pengarang: 'Pengarang 1',
      penerbit: 'Penerbit 1',
      tahun_terbit: 2021,
      stok_buku: 10,
      deskripsi: 'Deskripsi 1',
      id_rak_buku: '4dad87ae-0642-4e99-89fc-848047279afd',
    };

    const result = await supertest(app)
      .put('/api/buku/961027a5-9316-40cb-9726-8592adeaa21f')
      .field(formData)
      .attach('foto_buku', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when update buku with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');

    const formData = {
      judul_buku: 'Buku Thomas Update',
      pengarang: 'Pengarang 1',
      penerbit: 'Penerbit 1',
      tahun_terbit: 2021,
      stok_buku: 10,
      deskripsi: 'Deskripsi 1',
      id_rak_buku: '4dad87ae-0642-4e99-89fc-848047279afd',
    };

    const result = await supertest(app)
      .put('/api/buku/961027a5-9316-40cb-9726-8592adeaa21f')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_buku', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 404 when update buku with invalid bukuId', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const formData = {
      judul_buku: 'Buku Thomas Update',
      pengarang: 'Pengarang 1',
      penerbit: 'Penerbit 1',
      tahun_terbit: 2021,
      stok_buku: 10,
      deskripsi: 'Deskripsi 1',
      id_rak_buku: '4dad87ae-0642-4e99-89fc-848047279afd',
    };

    const result = await supertest(app)
      .put('/api/buku/999')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_buku', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  });

  it('should return 409 when update buku with judul_buku already exist', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const formData = {
      judul_buku: 'Buku Thomas Update',
      pengarang: 'Pengarang 1',
      penerbit: 'Penerbit 1',
      tahun_terbit: 2021,
      stok_buku: 10,
      deskripsi: 'Deskripsi 1',
      id_rak_buku: '4dad87ae-0642-4e99-89fc-848047279afd',
    };

    const result = await supertest(app)
      .put('/api/buku/961027a5-9316-40cb-9726-8592adeaa21f')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_buku', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(409);
    expect(result.body.message).toBeDefined();
  });
});