import React, { useContext, useRef, useState } from "react";
import DataContext from "../../context/DataContext";
import emailjs from "@emailjs/browser";
import messageSchema from "../../config/validace.schema";
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
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [userInput, setUserInputs] = useState({
    from_name: "",
    from_email: "",
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
  let errorHolder = "";
  let [errors, updateErrors] = useState(errorHolder);

  function validateInputs() {
    const result = messageSchema.validate(userInput);
    errorHolder = result.error ?? "";
    updateErrors(errorHolder);
    return result.isValid;
  }

  const sendEmail = (e) => {
    e.preventDefault();
    validateInputs()
      ? emailjs
          .send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            { ...userInput },
            EMAILJS_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          )
      : undefined;
  };

  return (
    <div className="w-full dark:bg-dark-300 border border-1 dark:border-none px-7 py-10 max-w-[50rem] dark:text-white-100 text-black rounded">
      <div className={`flex items-center justify-center self-stretch gap-x-4 `}>
        <p
          data-aos="zoom-in"
          className={`w-full max-w-[100px] h-[2px] rounded-[30px] md:m-[20px] bg-green-200 md:w-[120px]`}
        ></p>
        <p data-aos="fade-up" className={`text-3xl font-bold`}>
          Contact
        </p>
        <p
          data-aos="zoom-in"
          className={`w-full max-w-[100px] h-[2px] rounded-[30px] md:m-[20px] bg-green-200 md:w-[120px]`}
        ></p>
      </div>
      <div className=" flex flex-col-reverse md:flex-row justify-center items-center gap-8">
        <div className="socials md:w-full max-w-[20rem] px-2 flex flex-col items-center gap-y-2">
          <h3 className="text-sm py-4">My social handles</h3>
          <div className="flex gap-4 flex-wrap justify-center">
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
          <form
            id="inputs"
            className="w-full flex flex-col items-start justify-start text-xs gap-5"
            onSubmit={sendEmail}
          >
            <div ref={form} className="w-full flex flex-col md:flex-row gap-4">
              <div>
                <input
                  type="text"
                  name="from_name"
                  className="w-full p-3 rounded bg-[#1d1d1d18] dark:bg-dark-100 outline-none border dark:border-none focus:border-black "
                  placeholder="Full Name*"
                  value={userInput.from_name}
                  onChange={handleInput}
                />
                <p className="error-element text-red-300 px-2 text-[9px] absolute">
                  {errors.from_name?.required ?? " "}
                </p>
              </div>

              <div>
                <input
                  type="mail"
                  name="from_email"
                  className="w-full p-3 rounded bg-[#1d1d1d18] dark:bg-dark-100 border dark:border-none focus:border-black  outline-none "
                  placeholder="Email*"
                  value={userInput.from_email}
                  onChange={handleInput}
                />
                <p className=" error-element text-red-300 px-2 text-[9px] absolute">
                  {errors.from_email
                    ? errors.from_email[Object.keys(errors.from_email)]
                    : " "}
                </p>
              </div>
            </div>

            <div className="w-full relative">
              <textarea
                cols=""
                rows="8"
                name="message"
                className="w-full p-3 bg-[#1d1d1d18] dark:bg-dark-100 resize-none rounded border dark:border-none focus:border-black  outline-none"
                placeholder="Message*"
                onChange={handleInput}
                value={userInput.message}
              ></textarea>
              <p className="error-element text-red-300 px-2 text-[9px] absolute ">
                {errors.message?.required}
              </p>
            </div>
            <input
              className="w-full p-3 mt-2 text-center text-black font-semibold transition-all bg-[#1ba470] rounded cursor-pointer"
              type="submit"
              value="Send Message"
            />
            {/* {loading ? (
                <span className="text-red-200">Sending Message..</span>
              ) : (
                "Send Message"
              )}
            </input> */}
          </form>
        </div>
      </div>
    </div>
  );
}
