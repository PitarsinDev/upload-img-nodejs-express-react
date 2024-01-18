import React, { useState } from 'react';
import './App.css'
import axios from 'axios'

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      await axios.post('http://localhost:3001/upload', formData);
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <div className='flex justify-center'>
        <div className='p-10'>
          <h1 className='text-blue-500 text-3xl'>Image <span className='text-orange-500'>Uploader</span></h1>
          <div className='bg-orange-500 w-7 h-1 rounded-full'></div>
        </div>
      </div>
      <div className='flex justify-center'>
        <input type="file" onChange={handleFileChange} className='drop-shadow-md'/>
      </div>
      <div className='flex justify-center py-5'>
        <button onClick={handleUpload} className='bg-blue-200 text-blue-500 px-5 rounded-full shadow-md'>Upload</button>
      </div>
    </div>
  );
}

export default App;