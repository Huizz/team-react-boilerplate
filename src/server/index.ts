import { config } from 'dotenv';
import server from './server';

config(); // parse env variables

const port: string = process.env.PORT || '5000';
server.listen(port, () => console.log(`API server started on ${port}`));
