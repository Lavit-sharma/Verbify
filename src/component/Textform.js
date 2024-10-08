import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('enter text here');

  const handleUpClick = () => {
    console.log("Uppercase was clicked: " + text);
    setText(text.toUpperCase());
    props.showAlert("Uppercased!", "success");
  };

  const handledownClick = () => {
    console.log("Lowercase was clicked: " + text);
    setText(text.toLowerCase());
    props.showAlert("Lowercased!", "success");
  };

  const handledTitleCase = () => {
    console.log("Title case was clicked: " + text);
    const words = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1));
    setText(words.join(' '));
    props.showAlert("Converted to Title Case", "success");
  };

  const clear = () => {
    console.log("Clear was clicked");
    setText('');
    props.showAlert("Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log('Copying text...');
    navigator.clipboard.writeText(text);
    props.showAlert("Copied!", "success");
  };

  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/).join(' ');
    setText(newText);
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleReverseText = () => {
    const newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text reversed!", "success");
  };

  const handleCountVowels = () => {
    const count = (text.match(/[aeiou]/gi) || []).length;
    props.showAlert(`Number of vowels: ${count}`, "success");
  };

  const handleCountConsonants = () => {
    const count = (text.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
    props.showAlert(`Number of consonants: ${count}`, "success");
  };

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            style={{
              backgroundColor: props.mode === 'dark' ? 'white' : 'grey',
              height: "500px",
              fontSize: '30px',
              width: '100%',
              color: props.mode === 'dark' ? 'black' : 'white'
            }}
            onChange={handleOnChange}
            rows="10"
          ></textarea>
        </div>
        <button className='btn btn-primary mx-4 px-3 py-3 my-4' onClick={handleUpClick}>Convert to Upper Case</button>
        <button className='btn btn-primary mx-4 px-3 py-3' onClick={handledownClick}>Convert to Lower Case</button>
        <button className='btn btn-primary mx-4 px-3 py-3' onClick={handledTitleCase}>Convert to Title Case</button>
        <button className='btn btn-primary mx-4 px-3 py-3' onClick={clear}>Clear</button>
        <button className='btn btn-primary mx-4 px-3 py-3' onClick={handleCopy}>Copy</button>
        <button className='btn btn-primary mx-4 px-3 py-3' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-primary mx-4 px-3 py-3' onClick={handleReverseText}>Reverse Text</button>
        <button className='btn btn-primary mx-4 px-3 py-3' onClick={handleCountVowels}>Count Vowels</button>
        <button className='btn btn-primary mx-4 px-3 py-3' onClick={handleCountConsonants}>Count Consonants</button>
      </div>
      <div className='container my-5' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").length} minutes read</p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
      </div>
    </>
  );
}
