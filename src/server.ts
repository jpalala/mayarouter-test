import maya from '@mayajs/router';
import http from 'http';
import { Logger } from 'sitka';

const PORT = 3000;
const app = maya();

app.add([
  {
    path: "/",
    GET: () => "Hello World!",
  },
]);

http.createServer(app).listen(PORT, () => {
    const newLogger = Logger.getLogger({ name: 'Server' });
    newLogger.debug(`Server listening on port ${PORT}.`)
});