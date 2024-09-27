import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        setText(text.toUpperCase());
    };

    const handleDownClick = () => {
        setText(text.toLowerCase());
    };

    const handleCopyClick = () => {
        const textarea = document.getElementById('mybox');
        textarea.select();
        navigator.clipboard.writeText(textarea.value);
        document.getSelection().removeAllRanges();
    };

    const handleClearClick = () => {
        setText('');
    };

    const handleHESClick = () => {
        setText(text.split(/[ ]+/).join(" "));
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;

    return (
        <>
            <div className={`container ${props.darkMode ? 'text-white' : ''}`}>
                <h1 className={`text-center ${props.darkMode ? 'text-white' : ''}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className={`form-control ${props.darkMode ? 'bg-dark text-white' : ''}`}
                        value={text}
                        onChange={handleOnChange}
                        id="mybox"
                        rows="10"
                    ></textarea>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-center mb-3">
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 mb-2 mb-md-0" onClick={handleUpClick}>Convert to uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 mb-2 mb-md-0" onClick={handleDownClick}>Convert to lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 mb-2 mb-md-0" onClick={handleCopyClick}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 mb-2 mb-md-0" onClick={handleHESClick}>Handle Extra Spaces</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 mb-2 mb-md-0" onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>
            <div className="container my-3">
                <h1 className={`text-center ${props.darkMode ? 'text-white' : ''}`}>Your text summary</h1>
                <p className={`text-center ${props.darkMode ? 'text-white' : ''}`}><b>{wordCount} words and {text.length} characters</b></p>
                <p className={`text-center ${props.darkMode ? 'text-white' : ''}`}><b>{(0.008 * wordCount).toFixed(2)} Minutes to read</b></p>
                <h2 className={`text-center ${props.darkMode ? 'text-white' : ''}`}>Preview</h2>
                <p className={`text-center ${props.darkMode ? 'text-white' : ''}`}>{text.length === 0 ? "Enter something to preview" : text}</p>
            </div>
        </>
    );
}
