import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container" style={{ 
      backgroundImage: `url('https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      backgroundColor: '#F0F0F0'
    }}>
      <div className="container mt-3  bg-light">
        <div className="row mt-3">
          <div className="col-md-6">
            <h2>Contact Us</h2>
            <div className="contact-info">
              <div className="icon"><FaEnvelope /></div>
              <div className="text">
                <h3>Email:</h3>
                <p>contact@webelight.com</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="icon"><FaPhone /></div>
              <div className="text">
                <h3>Phone:</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="icon"><FaPhone /></div>
              <div className="text">
                <h3>Mobile:</h3>
                <p>+91 9012345678</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2>Address</h2>
            <div className="contact-info">
              <div className="icon"><FaMapMarkerAlt /></div>
              <div className="text">
                <p>Webelight Headquarters</p>
                <p>First Floor, Studio Complex, Gota, Ahmedabad, Gujarat 382481</p>
              </div>
            </div>
            <div className="map object-fit-contain">
              <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFueXxlbnwwfHwwfHw%3D&w=1000&q=80" className="h-25 w-25" alt="Map" />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 offset-md-3">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
