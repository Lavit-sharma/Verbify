import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  const [btnTxt, setBtnTxt] = useState('Enable dark mode');

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      setBtnTxt('Enable light mode');
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtnTxt('Enable dark mode');
    }
  };

  return (
    <div className='container' style={myStyle}>
      <h1>About Verbify</h1>
      <p>Verbify is a versatile text editor designed to help users efficiently manage, manipulate, and analyze text. Whether you're writing an essay, cleaning up text, or transforming it for various formats, Verbify makes it easy with a set of powerful text manipulation tools.</p>
      
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What is Verbify?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Verbify</strong> is a user-friendly text editor built with modern web technologies. It provides multiple text processing options, including converting text to uppercase, lowercase, title case, removing extra spaces, and more. It is designed for both casual users who need quick text modifications and professionals requiring more advanced features like character and word count analysis.
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Key Features
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <ul>
                <li><strong>Uppercase/Lowercase Conversion:</strong> Instantly convert text to uppercase or lowercase with a single click.</li>
                <li><strong>Title Case:</strong> Automatically format text in title case, perfect for headings or titles.</li>
                <li><strong>Remove Extra Spaces:</strong> Clean up extra spaces between words or sentences to ensure clean text formatting.</li>
                <li><strong>Copy to Clipboard:</strong> Copy the processed text directly to your clipboard for easy use in other applications.</li>
                <li><strong>Character & Word Count:</strong> Get real-time statistics about the number of words and characters in your text.</li>
                <li><strong>Light/Dark Mode:</strong> Toggle between light and dark modes to suit your viewing preference.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Why Use Verbify?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Verbify stands out because of its simplicity and speed. Whether you're working on a blog post, academic paper, or any other text-based project, Verbify streamlines the process by providing easy-to-use tools that enhance productivity. No need to switch between different platforms for text processing—Verbify has everything in one place, accessible from any device.
            </div>
          </div>
        </div>
      </div>

      <button type="button" onClick={toggleStyle} className="btn btn-primary my-3">
        {btnTxt}
      </button>
    </div>
  );
}
