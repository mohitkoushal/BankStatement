const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

exec('java -version', (error, stdout, stderr) => {
    if (error) {
        console.error('Error running Java:', stderr);
        return;
    }
    console.log('Java is accessible:', stdout);
});

// Path to the Tabula JAR file
const tabulaJarPath = path.join(__dirname, '..', 'uploads', 'tabula', 'tabula.jar');

// Extract tables from PDF using Tabula
const extractTableData = (pdfPath, csvPath) => {
    return new Promise((resolve, reject) => {
        // Full path to the Java executable
        //const javaPath = `"C:\\Program Files\\Java\\jdk-22\\bin\\java.exe"`; // Update if necessary
        const javaPath='java';

        // Command to extract tables from all pages using lattice mode, which works better for structured tables
        const cmd = `${javaPath} -jar "${tabulaJarPath}" -l --pages all -o "${csvPath}" "${pdfPath}"`;

        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                console.error('Error extracting table data:', stderr);
                return reject(err);
            }
            console.log('Table data extracted:', stdout);
            resolve();
        });
    });
};

// Main controller function
const bankStatementConverter = async (req, res) => {
    try {
        const pdfPath = req.file.path;
        console.log(`Received PDF: ${pdfPath}`);

        const csvPath = path.join(path.dirname(pdfPath), 'output.csv');

        // Extract table data using Tabula
        await extractTableData(pdfPath, csvPath);

        // Send the CSV file as a response
        res.download(csvPath, 'BankStatement.csv', (err) => {
            if (err) {
                console.error('Error downloading the file:', err);
                res.status(500).send('Error downloading the file');
            }

            // Clean up
            fs.remove(pdfPath);
            fs.remove(csvPath);
        });

    } catch (err) {
        console.error('Error processing file:', err);
        res.status(500).send('Error processing file');
    }
};

module.exports = { bankStatementConverter };
