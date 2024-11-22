# Code Citations

## License: MIT

[Source](https://github.com/ryuz/jelly/tree/c195e9ff67655065ef3fe27a8f249b1b82e5c043/projects/kv260/kv260_imx219/app/grpc/client_tauri/index.html)

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { useEffect, useState } from 'react';
import { groq } from 'groq-js';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Sample data to query
const data = [
  { _type: 'analysisResult', fileId: 'file1', result: 'Phishing detected' },
  {_type: 'analysisResult', fileId: 'file2', result: 'No issues found' },
];

app.post('/api/analysis', async (req, res) => {
  const { query, params } = req.body;
  const compiledQuery = groq`${query}`;
  const result = await compiledQuery(data, params);
  res.json(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const fetchAnalysisResult = async (fileId) => {
  const query = groq`*[_type == "analysisResult" && fileId == $fileId]`;
  const params = { fileId };
  const result = await fetch('/api/analysis', {
    method: 'POST',
    body: JSON.stringify({ query, params }),
  }).then((res) => res.json());
  return result;
};

const App = () => {
  const [file, setFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);

  useEffect(() => {
    if (file) {
      fetchAnalysisResult(file.name).then((result) => {
        setAnalysisResult(result);
      });
    }
  }, [file]);

  return (
    <React.Fragment>
      {/*FileUploader and other components*/}
      {analysisResult && React.createElement(AnalysisResult, { result: analysisResult })}
    </React.Fragment>
  );
};

createRoot(document.getElementById('root')).render(

  ```jsx
  <StrictMode>
    <App />
  </StrictMode>
  ```

);
