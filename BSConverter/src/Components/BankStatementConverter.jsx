import React, { useState } from 'react';
import './BankStatementConverter.css';

const BankStatementConverter = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select a PDF file to convert.');
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/api/bankstatementconverter', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to convert the file.');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'BankStatement.csv'; // Specify the download filename
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      setError('An error occurred while converting the file.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="converter-container">
      <h1 className="converter-title">Bank Statement Converter</h1>
      <form onSubmit={handleSubmit} className="converter-form">
        <label className="file-label">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="file-input"
          />
          <span className="file-custom">Choose File</span>
          {file && <span className="file-name">{file.name}</span>}
        </label>
        <button type="submit" className="convert-button" disabled={isLoading}>
          {isLoading ? 'Converting...' : 'Convert to Excel'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default BankStatementConverter;
