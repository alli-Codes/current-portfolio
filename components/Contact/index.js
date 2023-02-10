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
import { Icon } from "@iconify/react";

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
    <div className="w-full dark:bg-dark-300 px-12 py-5 max-w-[50rem] dark:text-white-100 text-black rounded">
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
      <div className=" flex justify-center gap-x-8">
        <div className="socials w-full px-2 flex flex-col gap-y-4">
          <h3 className="text-sm py-4">My social handles</h3>
          <div className="flex gap-4 flex-wrap">
            <a
              href=""
              className="flex items-center gap-1 px-3 py-2 bg-black dark:bg-dark-100 text-white-100 text-xs rounded-full"
            >
              <Icon icon="mdi:linkedin" width={15} />
              LinkedIn
            </a>

            <a
              href=""
              className="flex items-center gap-1 p-2 bg-black dark:bg-dark-100 text-white-100 text-xs rounded-full"
            >
              <Icon icon="mdi:twitter" width={15} />
              Twitter
            </a>

            <a
              href=""
              className="flex items-center gap-1 p-2 bg-black dark:bg-dark-100 text-white-100 text-xs rounded-full"
            >
              <Icon icon="mdi:github" width={15} />
              GitHub
            </a>

            <a
              href=""
              className="flex items-center gap-1 p-2 bg-black dark:bg-dark-100 text-white-100 text-xs rounded-full"
            >
              <Icon icon="mdi:facebook" width={15} />
              Facebook
            </a>
          </div>
        </div>

        <div className={`w-full max-w-[25rem] transition-all`} id="form">
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
            <div className="w-full flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                className="w-full p-3 rounded bg-[#1d1d1d18] dark:bg-dark-100 border-none outline-none "
                placeholder="Full Name"
                value={userInput.name}
                onChange={handleInput}
              />

              <input
                type="mail"
                name="email"
                className="w-full p-3 rounded bg-[#1d1d1d18] dark:bg-dark-100 border-none outline-none "
                placeholder="johndoe@mail.com"
                value={userInput.email}
                onChange={handleInput}
              />
            </div>

            <textarea
              cols=""
              rows="8"
              name="message"
              className="w-full p-3 bg-[#1d1d1d18] dark:bg-dark-100 resize-none rounded outline-none"
              placeholder="Message"
              onChange={handleInput}
              value={userInput.message}
            ></textarea>
            <button
              className="w-full p-3 text-center text-black font-semibold transition-all bg-green-400 rounded "
              onClick={sendMessage}
            >
              {loading ? (
                <span className="text-red-200">Sending Message..</span>
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
