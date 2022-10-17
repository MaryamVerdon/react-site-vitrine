import React from "react";
import Buttons from "../components/Buttons";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>12 rue Laplace</p>
              <p>51100 Reims</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>télèphone</h4>
              <div onClick={() => alert("Téléphone copié !")}>
                <p
                  onClick={() => navigator.clipboard.writeText("0648596237")}
                  className="hover"
                  style={{ cursor: "pointer" }}
                >
                  06 48 59 62 37
                </p>
              </div>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <div onClick={() => alert("Email copié !")}>
                <p
                  onClick={() =>
                    navigator.clipboard.writeText("fsagency@gmail.com")
                  }
                  className="hover"
                  style={{ cursor: "pointer" }}
                >
                  fsagency@gmail.com
                </p>
              </div>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>MV - 2022</p>
          </div>
        </div>
        <Buttons left="/projet-4" />
      </div>
    </main>
  );
};

export default Contact;
