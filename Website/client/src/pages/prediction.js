import React, { useState } from 'react';
import Navbar from '../Components/navbar';
import './prediction.css';
import axios from 'axios';

const Prediction = () => {
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');
    const [imageName, setImageName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [prediction, setPrediction] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileSelect = async (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setSelectedFile(file);
            setImageName(file.name);
            
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePredict = async () => {
        setLoading(true); // Start loading
        const formData = new FormData();
        formData.append('file', selectedFile);
    
        try {
            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setTimeout(() => {
                setPrediction(response.data.prediction);
            }, 2000);
        } catch (error) {
            console.error('Error during prediction:', error);
        } finally {
            
                setLoading(false); // End loading after a delay of 2 seconds
            
        }
    };

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='box'>
                <h2>File Upload & Image Preview</h2>
                <p className="lead">No Plugins <b>Just Javascript</b></p>

                <form id="file-upload-form" className="uploader">
                    <input id="file-upload" type="file" name="fileUpload" accept="image/*" onChange={handleFileSelect} />

                    <label htmlFor="file-upload" id="file-drag">
                        {!imagePreviewUrl && (
                            <div id="start">
                                <i className="fa fa-download" aria-hidden="true"></i>
                                <div>Select a file or drag here</div>
                                <div id="notimage" className="hidden">Please select an image</div>
                                <span id="file-upload-btn" className="btn btn-primary">Select a file</span>
                            </div>
                        )}
                        <div>
                        {imagePreviewUrl && (
                            <>
                                <img src={imagePreviewUrl} alt="preview" className='image' />
                                <div>{imageName}</div>
                            </>
                        )}
                        </div>
                    </label>
                </form>
                </div>
                <div className='box'>
                <button type="button" class="btn btn-success" onClick={handlePredict}>Predict</button>
                {prediction && <h3 className='headline'>{prediction}</h3>}
                </div>
                {loading && <div class="spinner-grow text-success" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>}
            </div>
        </div>
    );
};

export default Prediction;
