const express = require('express');
const multer = require('multer');
const lighthouse = require('@lighthouse-web3/sdk');

const app = express();
const upload = multer({ dest: 'uploads/' }); // This will store uploaded files in an 'uploads' directory

const apiKey = '2badd02d.621b89ce2e384b4d870b7a0ef92950b6';

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const filePath = req.file.path;
    const uploadResponse = await lighthouse.upload(filePath, apiKey);
    console.log(uploadResponse);
    res.status(200).send(uploadResponse);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while uploading the file.' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
