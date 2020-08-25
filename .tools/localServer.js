import createApp from './../src/server';

createApp("../../dist/index.html")
  .listen(3000, () => console.log('Local server listening on port 3000!'));
