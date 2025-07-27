Bank Statement Converter
A React-based web application that converts bank statement PDF files into Excel (CSV) format by uploading files to a backend API for processing.
Features

PDF to CSV Conversion: Upload a bank statement in PDF format and convert it to a downloadable CSV file.
User-Friendly Interface: Built with React, featuring a simple file upload form with error handling and loading states.
Responsive Design: Styled with CSS for a clean and intuitive user experience.
Backend Integration: Communicates with a backend API to process PDF files.
Error Handling: Displays clear error messages for invalid inputs or failed conversions.
Automatic Download: Automatically downloads the converted CSV file upon successful processing.

Prerequisites
Before running the application, ensure you have the following installed:

Node.js: Version 14.x or higher
npm: Comes with Node.js, or you can use yarn as an alternative
Backend API: A running backend server that accepts PDF uploads and returns CSV data. (Note: This README assumes the backend is already set up. If you need to develop the backend, ensure it supports PDF parsing and CSV generation.)

Installation

Clone the Repository:
git clone https://github.com/your-username/bank-statement-converter.git
cd bank-statement-converter


Install Dependencies:
npm install

This project uses React, which is the primary dependency. No additional libraries are required for the frontend, but ensure the following are included in your package.json:
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.3.9"
  }
}


Set Up the Backend API:

Ensure the backend API is running at <YOUR_BACKEND_API_URL>.
The API should accept a POST request with a multipart/form-data body containing a PDF file and return a CSV file as a blob.
If you need to develop the backend, consider using a framework like Flask or Express.js with libraries such as pdf2json or pdf-parse for PDF processing.


Add CSS File:

Create a file named BankStatementConverter.css in the src directory with the following styles (or customize as needed):.converter-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.converter-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.converter-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.file-label {
  position: relative;
  display: inline-block;
}

.file-input {
  opacity: 0;
  position: absolute;
  z-index: -1;
}

.file-custom {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
}

.file-name {
  margin-left: 10px;
  font-size: 0.9rem;
  color: #555;
}

.convert-button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.convert-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error-message {
  color: red;
  margin-top: 10px;
}





Usage

Run the Application:
npm start

If using Vite, run:
npm run dev


Access the Web Interface:

Open your browser and navigate to http://localhost:3000 (or the port specified by your setup, e.g., 5173 for Vite).


Convert a Bank Statement:

Click "Choose File" to select a bank statement PDF.
The selected file name will be displayed.
Click "Convert to Excel" to upload the file to the backend API.
Upon successful conversion, a CSV file named BankStatement.csv will automatically download.
If an error occurs (e.g., invalid file or server issue), an error message will be displayed.



Configuration

Backend API Endpoint: The application sends requests to <YOUR_BACKEND_API_URL>. Update the fetch URL in BankStatementConverter.js to match your backend API endpoint.
File Validation: The frontend restricts uploads to PDF files using the accept=".pdf" attribute. Additional validation can be added (e.g., file size limits) in the handleFileChange function.
Styling: Customize the BankStatementConverter.css file to match your desired design.

Notes

Backend Dependency: The application requires a functional backend API to process PDFs. Ensure the backend is running and accessible.
File Size: Large PDF files may cause delays or timeouts. Consider adding a file size limit (e.g., 10MB) in the frontend or backend.
Security: Ensure the backend API validates uploaded files to prevent security risks (e.g., malicious PDFs).
Cross-Origin Requests: The backend must support CORS if hosted on a different domain. Add appropriate headers (e.g., Access-Control-Allow-Origin) in the backend configuration.

Limitations

Requires a stable internet connection to communicate with the backend API.
Conversion accuracy depends on the backend's PDF parsing capabilities and the quality of the input PDF.
Only supports PDF inputs; other formats (e.g., images) are not handled.
The frontend does not currently display a progress bar for large files; consider adding one for better UX.

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Create a Pull Request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For questions or support, contact Mohit Kaushal at [mkmoney09@gmail.com] or open an issue on GitHub.
© 2025 textfromvideo.com. Made with ❤️ in India by Mohit Kaushal.
