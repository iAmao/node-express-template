import 'module-alias/register';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const router = express.Router();
const { PORT=3999 } = process.env;

routes(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(helmet());

app.get('/', (req, res) => {
    return res
        .status(200)
        .json({
            message: 'Welcome!'
        });
});

app.use('/api/v1', router);

app.get('*', (req, res) => {
    return res
        .status(404)
        .json({ message: 'resource not found' });
});

app.listen(PORT, () => {
    console.log(`Server started 🚀 on :${PORT}`);
});

export default app;
