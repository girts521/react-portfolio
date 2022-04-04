import React, {useRef} from "react";
import styles from "./Contact.module.css";


const Contact: React.FC = () => {

    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);

    //fetch localhost 3001 and send data
    const sendData = async () => {

      const data = {
        name: nameRef.current!.value,
        email: emailRef.current!.value,
        message: messageRef.current!.value
    };

      console.log(data)
        const response = await fetch('http://localhost:3001/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const json = await response.json();
        console.log(json);
    };


  return (
    <div className={styles.container}>
        <div className={styles.contact}>
            <h1>Contact</h1>
            <p>If you have any questions or comments, please feel free to reach out to me!</p>
            <input ref={emailRef} type="email" placeholder="Enter your email" />
            <input ref={nameRef} type="text" placeholder="Enter your name" />
            <textarea ref={messageRef} placeholder="Enter your message"></textarea>
            <button onClick={sendData}>Send</button>
        </div>
    </div>
  );
};

export default Contact;