import React from "react";
import './About.css';

const About = () => {
  return (
    <div className="container my-5 x">
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2 fw-bold text-black">
          <h2 className="text-center mb-4">Welcome to Webelight!</h2>
          <p>
            At Webelight, we are on a mission to bring innovation and creativity to the digital world. We take pride in providing our customers with an exceptional and user-friendly experience. Our diverse range of products spans across various categories, including cutting-edge tech gadgets, software solutions, and digital services.
          </p>
          <p>
            Our commitment is to offer top-notch products and services while maintaining affordability, allowing individuals and businesses of all sizes to leverage the power of technology. With a focus on excellence, we continuously strive to exceed customer expectations and deliver exceptional results.
          </p>
          <p>
            Our website and mobile app are designed to make your journey with us seamless, whether you are exploring from the comfort of your home or on the move. Your privacy and security are of utmost importance to us, and we employ the latest technology and rigorous security measures to safeguard your personal information and transactions.
          </p>
          <p>
            At Webelight, we are dedicated to continuous improvement. Your feedback and suggestions are invaluable to us, as they help us enhance our offerings and services. Please feel free to reach out to our friendly and knowledgeable support team, available 24/7, with any questions or comments you may have.
          </p>
          <p className="text-center mt-5">
            <strong>
              Thank you for choosing Webelight. We are excited to embark on this journey with you!
            </strong>
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default About;
