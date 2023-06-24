import React, { useState } from 'react';

export default function Form() {

    // method to validate email 
    const validateEmail = () => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    // state vars for name, email, message
    // set initial values to empty strings
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // state varS for success and error message, initial values empty
    const [errorMessage, setErrorMessage] = useState('');
    const [succeessMessage, setSuccessMessage] = useState('');

    // handle input change
    const handleInputChange = (e) => {
      // get the value and id of the input that triggered change
      const { target } = e;
      const inputId = target.id;
      const inputValue = target.value;
  
      // based on input id, set value of email, name or message
      if (inputId === 'email') {
        setEmail(inputValue);
      } else if (inputId === 'name') {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }

      // check if the email is valid, if not display error message
      // clear success message if one is being displayed
      if (!validateEmail(email)) {
        setErrorMessage('');
        setSuccessMessage('');
        setErrorMessage('Invalid email.');
        return;
      }

      // check if name and message fields are filled in, if not display error message
      // clear success message if one is being displayed
      if (!name) {
        setErrorMessage('');
        setSuccessMessage('');
        setErrorMessage(
          'Please enter your name.'
        );
        return;
      }

      if (!message) {
        setErrorMessage('');
        setSuccessMessage('');
        setErrorMessage(
          'Please enter a message.'
        );
        return;
      }

      if (validateEmail(email) && name && message) {
        setErrorMessage('');
      }
    };

    // handle form submit
    const handleFormSubmit = (e) => {
      // prevent from refreshing page
      e.preventDefault();

      if (validateEmail(email) && name && message) {
          // set success message and clear error message if one is being displayed
          setSuccessMessage(
            'Thank you for your message! I\'ll get back to you as soon as I can.'
          );
          setErrorMessage('');
  
          // clear input fields on successful submission
          setName('');
          setEmail('');
          setMessage('');
        } else {
          setErrorMessage('Something went wrong, pleae check your input.');
        }
      } 
    
      return (
      <div className="contact-page d-flex flex-row align-items-center justify-content-around" style={{height:  "85vh", border: "2px solid #161615", borderRadius: "44px", overflow: "hidden", marginTop:"5vh", marginBottom:"5vh" }}>
        <div style={{textAlign: 'center'}}>
          <h3 style={{color: '#161615', fontWeight: 'bold', marginBottom: "3vh"}}>Get in touch with me</h3>
          <p style={{color: '#161615'}}>Email: zlatelinarizova@gmail.com</p>
          <p style={{color: '#161615'}}>Phone: 708-264-0000</p>
        </div>
        <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12">
          <form className="form">
            <div className="form-group">
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                onClick={handleInputChange} // change input and run validation when user clicks into an input field 
                type="text"
                className="form-control form-control-sm overflow-hidden"
                id="name"
                placeholder="Your Name"
                style={{ backgroundColor: '#F8f7f3', color: '#161615', border: '2px solid #161615', marginBottom: "1vh"}}
              />
            </div>
            <div className="form-group">
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                onClick={handleInputChange}
                type="email"
                className="form-control form-control-sm overflow-hidden"
                id="email"
                placeholder="Your Email"
                style={{ backgroundColor: '#F8f7f3', color: '#161615', border: '2px solid #161615', marginBottom: "1vh" }}
              />
            </div>
            <div className="form-group">
              <textarea
                value={message}
                name="message"
                onChange={handleInputChange} 
                onClick={handleInputChange} 
                type="text"
                rows="8"
                className="form-control form-control-sm overflow-auto"
                id="message"
                placeholder="Your Message"
                style={{ backgroundColor: '#F8f7f3', color: '#161615', border: '2px solid #161615', marginBottom: "1vh" }}
              />
            </div>
            
            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={handleFormSubmit}
              style={{
                backgroundColor: "#F8f7f3", 
                color: "#161615", 
                borderRadius: "0",  
                border: "2px solid #161615",
                fontFamily: "abril-fatface, serif",
              }}
            >
              Submit
            </button>
          </form>
          
          {/* render messages conditionally  */}
          {errorMessage && (
          <div>
            <p className="error-text" style={{color: '#8b0000', fontStyle: 'italic', fontSize: "2vh"}}>{errorMessage}</p>
          </div>
          )}

          {succeessMessage && (
          <div>
            <p className="success-text" style={{color: '#161615', fontStyle: 'italic', fontSize: "2vh"}}>{succeessMessage}</p>
          </div>
          )}
        </div>
        
      </div>
    );
  }