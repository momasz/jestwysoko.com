import createApp from './../src/server';
import path from "path";

createApp(path.resolve(__dirname, "../dist/index.html"), true)
  .listen(3000, () => console.log('Local server listening on port 3000!'));
