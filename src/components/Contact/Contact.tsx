import React, { useRef, useState } from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  //state for sent message
  const [sent, setSent] = useState(false);
  //state for valid email
  const [falseEmail, setfalseEmail] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  //fetch localhost 3001 and send data
  const sendData = async () => {
    const validEmail = validateEmail(emailRef.current!.value);

    if (validEmail  && messageRef.current!.value && nameRef.current!.value) {
      const data = {
        name: nameRef.current!.value,
        email: emailRef.current!.value,
        message: messageRef.current!.value,
      };

      nameRef.current!.value = "";
      emailRef.current!.value = "";
      messageRef.current!.value = "";

      const response = await fetch("https://gkarcevskis-portfolio-api.herokuapp.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();

      if (json.sent) {
        setSent(true);
        setTimeout(() => {
          setSent(false);
        }, 3000);
      }
    } else {
      setfalseEmail(true);
      setTimeout(() => {
        setfalseEmail(false);
      }, 3000);
    }
  };

  //validate email
  const validateEmail = (email: string) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <div id="contact" className={styles.container}>
      <div className={styles.contact}>
        <h1>Contact</h1>
        <p>
          If you have any questions or comments, please feel free to reach out
          to me!
        </p>
        {sent && <div className={styles.sent}> Message sent! Thank you :)</div>}
        {falseEmail && (
          <div className={styles.error}> Please enter a valid email, name and text message!</div>
        )}
        <input ref={emailRef} type="email" placeholder="Enter your email" />
        <input ref={nameRef} type="text" placeholder="Enter your name" />
        <textarea ref={messageRef} placeholder="Enter your message"></textarea>
        <button onClick={sendData}>Send</button>
      </div>
    </div>
  );
};

export default Contact;
