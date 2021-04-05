import * as express from 'express';
import { Request, Response } from 'express';

import { claims } from './routes/cliam';

const app = express();
const {
    PORT = 3000,
} = process.env;

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'API index page',
    });
});

app.use('/claims', claims);

app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
});
