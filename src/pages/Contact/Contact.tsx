import React, { useState } from "react";
import "./Contact.scss";
import { PopupModal } from "react-calendly";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import BongoCat from "../../assets/images/bongo-cat.png";

const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const rootElement = document.getElementById("root");

  return (
    <div className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-information">
          <img className="bongo-cat-picture" alt="Bongo Cat" src={BongoCat} />
          <h2 className="contact-sub-header">Lets Connect</h2>
          <p className="contact-description">
            Hello! Actively exploring full-time and internship positions in
            software engineering. Passionate about impactful solutions and eager
            to connect with you. Looking forward to the chance to discuss
            opportunities.
          </p>
          <div className="contact-links">
            <button className="calendly-button" onClick={openModal}>
              <FontAwesomeIcon
                className="paper-plane-icon"
                icon={faPaperPlane}
              />{" "}
              Lets Chat
            </button>
            <a className="email-link" href="mailto:andytule321@gmail.com">
              <FontAwesomeIcon className="envelope-icon" icon={faEnvelope} />{" "}
              Email Me
            </a>
          </div>
        </div>
        {rootElement && (
          <PopupModal
            url="https://calendly.com/andytule321/30min"
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "558bd9",
              textColor: "3d3d3d",
            }}
            onModalClose={closeModal}
            open={isOpen}
            rootElement={rootElement}
          />
        )}
      </div>
    </div>
  );
};

export default Contact;
