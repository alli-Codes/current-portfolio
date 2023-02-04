import React, { useContext, useState } from "react";
import { Container } from "..";
import { AiFillMessage, AiOutlineClose } from "react-icons/ai";
import DataContext from "../../context/DataContext";
import emailjs from "@emailjs/browser";
import { Notification, validateEmail } from "../../helpers";
import {
  EMAILJS_TEMPLATE_ID,
  EMAILJS_SERVICE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../../config";

const notif = new Notification(3000);

function Contact() {
  const { contactActive, closeContactForm, openContactForm } =
    useContext(DataContext);

  return (
    <div className=" flex justify-center" id="contact">
      {/* contact form */}
      <ContactForm />
    </div>
  );
}

export default Contact;

function ContactForm({ contactActive, closeContactForm }) {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInput(e) {
    let inputName = e.target.name;
    let inputVal = e.target.value;

    setUserInputs((prev) => {
      return {
        ...prev,
        [inputName]: inputVal,
      };
    });
  }

  function sendMessage() {
    if (userInput.name === "") {
      return notif.error("username cant be blank.");
    }
    if (userInput.email === "") {
      return notif.error("email cant be blank.");
    }
    if (userInput.message === "") {
      return notif.error("message cant be blank.");
    }

    // validate phonenumber
    if (validateEmail(userInput.email) == false) {
      return notif.error("email is invalid.");
    }

    const { name, email, message } = userInput;

    const templateParams = {
      from_name: name,
      sender_email: email,
      message,
    };

    // check if EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY isnt empty

    if (
      EMAILJS_TEMPLATE_ID === "" ||
      EMAILJS_SERVICE_ID === "" ||
      EMAILJS_PUBLIC_KEY === ""
    ) {
      console.error(`
                FAILED TO SEND MESSAGE: missing some configurations. check your config file.

                check your config/index.js file
            `);
      return notif.error(` FAILED TO SEND MESSAGE: something went wrong.`);
    }

    setLoading(true);
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setLoading(false);
          notif.success("MESSAGE SENT.");
          userInput.email = "";
          userInput.name = "";
          userInput.message = "";
          return console.log(response);
        },
        (err) => {
          setLoading(false);
          notif.error(`Something went wrong, could not send message.`);
          console.error(err);
        }
      );
  }

  return (
    <div className="w-full dark:bg-dark-300 px-12 py-5 max-w-[50rem] text-white-100 rounded">
      <div
        className={`w-full flex flex-row items-center justify-center py-6 md:py-3`}
      >
        <span
          data-aos="zoom-in"
          className={`w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]`}
        ></span>
        <p data-aos="fade-up" className={`text-3xl font-bold`}>
          Contact
        </p>
        <span
          data-aos="zoom-in"
          className={`w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]`}
        ></span>
      </div>
      <div className=" flex justify-center">
        <div className={` max-w-[25rem] z-[999] transition-all`} id="form">
          <div
            id="head"
            className="w-full flex flex-row items-start justify-start"
          >
            <h1 className="text-sm py-4">Send a message</h1>
          </div>
          <div
            id="inputs"
            className="w-full flex flex-col items-start justify-start text-xs gap-4"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                className="w-full p-3 rounded bg-dark-100 border-none outline-none "
                placeholder="Full Name"
                value={userInput.name}
                onChange={handleInput}
              />

              <input
                type="mail"
                name="email"
                className="w-full p-3 rounded bg-dark-100 border-none outline-none "
                placeholder="johndoe@mail.com"
                value={userInput.email}
                onChange={handleInput}
              />
            </div>

            <textarea
              cols=""
              rows="8"
              name="message"
              className="w-full p-3 bg-dark-100 resize-none rounded outline-none"
              placeholder="Message"
              onChange={handleInput}
              value={userInput.message}
            ></textarea>
            <button
              className="w-full p-3 text-center transition-all bg-dark-200 rounded hover:bg-dark-400"
              onClick={sendMessage}
            >
              {loading ? (
                <span className="text-green-200">Sending Message..</span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
