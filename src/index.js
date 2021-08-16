const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const multer = require('multer');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

const upload = multer({ dest: 'uploads/' })
app.post('/file', upload.single('d'), (req, res) => {
    console.log(req.file);
    res.send({
        success: true,
    });
});


const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`Express App is listening on ${PORT}`);
});