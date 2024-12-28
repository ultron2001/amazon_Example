const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const hostname = '127.0.0.1';
const port = 5000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'image_upload');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));
app.use('/image_upload', express.static('image_upload'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'admin.html');
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send('Admin page not found!');
      return;
    }
    res.sendFile(filePath);
  });
});

app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Image uploaded successfully!');
});


app.delete('/delete', (req, res) => {

  const imagePath = req.body.imagePath;


  console.log('Attempting to delete:', imagePath);


  if (!imagePath) {
    return res.status(400).send('Image path is required.');
  }


  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error('Error deleting the image:', err);
      return res.status(500).send('Error deleting the image.');
    }
    res.send('Image deleted successfully!');
  });
});

app.get('/video/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'videos', req.params.filename);
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send('Video not found!');
      return;
    }
    res.sendFile(filePath);
  });
});

app.post('/update-description', (req, res) => {
  descriptionText = req.body.newDescription || descriptionText;
  res.json({ message: 'Description updated successfully!' });
})

app.get('/description', (req, res) => {
  res.json({ description: descriptionText });
});

// Start the server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
