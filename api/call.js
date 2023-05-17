import('../server/src/server.js').then(({ Server }) => {
    Server.start();
  }).catch((error) => {
    // Handle any errors that occur during the import
    console.error('Error while importing server:', error);
  });
  