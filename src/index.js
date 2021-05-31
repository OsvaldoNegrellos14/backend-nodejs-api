import express from 'express'
import morgan from 'morgan';
import cors from 'cors'


const app = express();

const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200
}

app.set('port', process.env.PORT || 3000);
// middleware
app.use(morgan('dev'));
app.use(cors());

// routes
// app.use('/api', cors(corsOptions), router);

app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'));
});