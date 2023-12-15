import express from 'express';
import adminController from '../controller/adminController.js';
import agamaController from '../controller/agamaController.js';
import kelasController from '../controller/kelasController.js';
import rakBukuController from '../controller/rakBukuController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = new express.Router();
router.use(authMiddleware);

// ADMIN
router.get('/api/admin', adminController.getAdminController);
router.put('/api/admin/:adminId', adminController.updateAdminController);
router.delete('/api/admin/logout', adminController.logoutAdminController);

// AGAMA
router.get('/api/agama', agamaController.getAgamaController);
router.get('/api/agama/search', agamaController.searchAgamaController);
router.post('/api/agama', agamaController.createAgamaController);
router.get('/api/agama/:agamaId', agamaController.getAgamaByIdController);
router.put('/api/agama/:agamaId', agamaController.updateAgamaController);
router.delete('/api/agama/:agamaId', agamaController.deleteAgamaController);

// KELAS
router.get('/api/kelas', kelasController.getKelasController);
router.get('/api/kelas/search', kelasController.searchKelasController);
router.post('/api/kelas', kelasController.createKelasController);
router.get('/api/kelas/:kelasId', kelasController.getKelasByIdController);
router.put('/api/kelas/:kelasId', kelasController.updateKelasController);
router.delete('/api/kelas/:kelasId', kelasController.deleteKelasController);

// RAK BUKU
router.get('/api/rak-buku', rakBukuController.getRakBukuController);
router.get('/api/rak-buku/search', rakBukuController.searchRakBukuController);
router.post('/api/rak-buku', rakBukuController.createRakBukuController);
router.get('/api/rak-buku/:rakBukuId', rakBukuController.getRakBukuByIdController);
router.put('/api/rak-buku/:rakBukuId', rakBukuController.updateRakBukuController);
router.delete('/api/rak-buku/:rakBukuId', rakBukuController.deleteRakBukuController);

export { router };