import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>About Verbify</h5>
              <p>
                Verbify is a powerful text manipulation tool, designed to help you efficiently manage and transform text. From formatting to cleaning up, Verbify simplifies text editing for everyone.
              </p>
            </div>
            <div className="col-md-6">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-light">Home</a></li>
                <li><a href="/about" className="text-light">About Us</a></li>
                <li><a href="/contact" className="text-light">Contact</a></li>
              </ul>
            </div>
          </div>
          <hr className="bg-light" />
          <div className="text-center">
            <p>&copy; 2024 Verbify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
