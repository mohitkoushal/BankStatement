const express = require("express");
const router = express.Router();
const bankcontroller = require("../controllers/bank-controller"); // Import controller
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Route for converting bank statement
router.post('/bankstatementconverter', upload.single('file'), bankcontroller.bankStatementConverter);

// Route for serving converted images
// router.get('/image/:imageName', bankcontroller.serveImage); // Ensure the function is defined

module.exports = router;
