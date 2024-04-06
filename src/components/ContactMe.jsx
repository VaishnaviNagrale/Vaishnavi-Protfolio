import React, { useRef, useState } from "react";
import image from "../assets/logo.jpg";
import fantasy from "../assets/images/fantasy.jpg";
import pc from "../assets/images/access.png";
import emailjs from "@emailjs/browser";
import EarthCanvas from "./canvas/EarthCanvas";
import { motion } from "framer-motion";
import { slideIn } from "./utils/motion";

function ContactMe() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        setSuccessMessage("Message sent successfully!!");
        alert("Thank you. I will get back to you as soon as possible.");
        setTimeout(() => {
          setSuccessMessage(null);
        }, 1000);
      })
      .catch((error) => {
        setErrorMessage("Ahh, something went wrong. Please try again.");
        setTimeout(() => {
          setErrorMessage(null);
        }, 1000);
      });

    e.target.reset();
  };
  return (
    <div id="contact" className="mb-20">
      <div className="justify-center m-auto">
        <div>
          <h1 className="text-2xl text-orange-500 font-sans font-bold text-center">
            Contact Me
          </h1>
        </div>
        <div className="z-0 flex items-center justify-around max-w-screen-xl px-4 gap-4 flex-col lg:flex-row-reverse">
          {/* Here */}
          {/* <img
            src={pc}
            alt=""
            className='w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2'
          /> */}
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="w-full md:w-[80%] lg:w-[70%] h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px]"
          >
            <EarthCanvas />
          </motion.div>
          {/* Here */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your First Name</span>
                </label>
                <input
                  type="text"
                  name="first-name"
                  placeholder="Your First Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Last Name</span>
                </label>
                <input
                  type="text"
                  name="last-name"
                  placeholder="Your Last Name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                type="text"
                name="message"
                placeholder="Write your message here"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Send</button>
            </div>
          </form>
        </div>
        {successMessage && (
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{successMessage}</span>
          </div>
        )}

        {errorMessage && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactMe;
