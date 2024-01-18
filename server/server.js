const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/links', (req, res) => {
    res.sendfile(path.join(__dirname, 'links.html'));
});

app.post('/upload', upload.single('image'), (req, res) => {
    res.send('File uploaded successfully');
});

app.listen(port, () => {
    console.log('Server is running');
});