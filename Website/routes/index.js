// const express = require('express');
// const multer = require('multer');
// const fetch = require('node-fetch');
// const fs = require('fs');
// const FormData = require('form-data');

// const router = express.Router();
// const upload = multer({ dest: 'uploads/' }); // Temporarily store files in 'uploads/'

// router.post('/predict', upload.single('image'), async (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: 'No file uploaded.' });
//   }

//   const form = new FormData();
//   form.append('image', fs.createReadStream(req.file.path));

//   try {
//     const response = await fetch('http://localhost:5000/predict', {
//       method: 'POST',
//       body: form,
//       headers: form.getHeaders(),
//     });

//     if (!response.ok) {
//       throw new Error(`Python service responded with status ${response.status}`);
//     }

//     const predictionResult = await response.json();
//     res.json(predictionResult);
//   } catch (error) {
//     console.error('Error calling Python service for prediction:', error);
//     res.status(500).json({ error: 'Failed to get prediction from Python service.' });
//   } finally {
//     // Clean up: delete the temporary file
//     fs.unlink(req.file.path, (err) => {
//       if (err) console.error('Error deleting temporary file:', err);
//     });
//   }
// });

// module.exports = router;
