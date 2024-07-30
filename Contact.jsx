import React from 'react'
import '../Assets/Contact.css'
function Contact() {
  const HandleContactSubmit = () =>{
    // Your form submission logic goes here
    alert('Form submitted successfully!');
  }
  return (
    <div className="ContactUsContainer">
    <div className="ContactUsTitle">
      <h1>Contact Us</h1>
    </div>
    <div className="ContactUsContent">
      <p>If you have any questions, please feel free to reach out to us using the form below:</p>
      <form className="ContactForm" onSubmit={HandleContactSubmit}>
        <div className="FormGroup" >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="FormGroup">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="FormGroup">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="SubmitButton">Submit</button>
      </form>
    </div>
    <div className="FollowUs">
      <h2>Follow Us on Social Media</h2>
      <p>Stay connected with us through social media and stay updated with our latest news and events!</p>
      <div className="SocialIcons">
        <a href="" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </div>
  )
}

export default Contact