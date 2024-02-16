import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Sistem Informasi Perpustakaan | IntelliBook',
      description:
        'IntelliBook adalah sistem informasi perpustakaan untuk Sekolah SMA yang dibuat menggunakan React JS dan Express JS. Sistem ini dirancang untuk memudahkan siswa untuk meminjam buku di perpustakaan. \n\nIntelliBook memiliki beberapa fitur antara lain : \n\n- Login Admin \n\n- Manajemen master data seperti Agama , Kelas , Rak Buku \n\n- Manajemen Buku \n\n- Manajemen Siswa \n\n- Cetak Kartu Anggota Siswa \n\n- Peminjaman Buku \n\n- Laporan Pengembalian Buku \n\n Tech Stack yang saya gunakan di dalam project Backend Sistem Informasi Perpustakaan ini antara lain : \n\n- Node JS \n\n- Express JS \n\n- JavaScript \n\n- Prisma ORM \n\n- PostgreSQL',
      version: '1.0.0',
      contact: {
        name: 'Thomas Alberto',
        url: 'https://thomasalberto.vercel.app/',
        email: 'tomasalberto527@gmail.com',
      },
    },
    components: {
      securitySchemes: {
        barrerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    security: [
      {
        barrerAuth: [],
      },
    ],
  },
  apis: ['./src/docs/serviceDocs/*.js', './src/docs/routesDocs/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  //  Docs in JSON format
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
};

export default swaggerDocs;
