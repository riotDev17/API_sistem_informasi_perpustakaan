import multer from 'multer';
import { ResponseError } from '../error/responseError.js';

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + '-' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE', 'File Harus Bertipe png, jpg, atau jpeg'));
    // cb(null, false);
    // throw new ResponseError(404, 'File Harus Bertipe png, jpg, atau jpeg');
  }
};


const uploadFile = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB
  },
  single: (req, file, cb) => cb(null, true),
});

export default uploadFile;