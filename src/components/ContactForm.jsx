import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const msg = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_ozvxb6n",
        "template_3n2loeu",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          msg.innerHTML = `
           <p class='success'> Message envoyé ! </p> 
          `;

          setTimeout(() => {
            msg.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          msg.innerHTML = `
          <p class='error'> Une erreur s'est produite, veuillez réessayer ! </p> 
         `;

          setTimeout(() => {
            msg.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
        <h2>Contactez-nous</h2>
        <form ref={form} onSubmit={sendEmail} className="form-content">
            <label>Nom</label>
            <input type="text" name="name" required autoComplete="off" id="name" />
            <label>Email</label>
            <input type="email" name="email" required autoComplete="off" id="email" />
            <label>Message</label>
            <textarea name="message" id="mess" />
            <input type="submit" value="Envoyer" className="hover button" />
        </form>
      <div className="formMessage"></div>
    </div>
  );
};
export default ContactForm;