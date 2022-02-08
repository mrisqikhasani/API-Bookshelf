const {
  handleDapatkanBuku,
  handleTambahBuku,
  handleDapatkanIdBuku,
  handleUbahBuku,
  handleHapusBuku,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: handleTambahBuku,
  },
  {
    method: 'GET',
    path: '/books',
    handler: handleDapatkanBuku,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: handleDapatkanIdBuku,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: handleUbahBuku,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: handleHapusBuku,
  },
  // {
  //   method: 'GET',
  //   path: '/books',
  //   handler: (request, h) => {
  //     console.log(request.params);
  //   },
  // },
];

module.exports = routes;
