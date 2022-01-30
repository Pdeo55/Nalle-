import React, { useState } from "react";
import classes from "./Contact.module.css";
import tele from "../../assets/tele.png";
import location from "../../assets/location.png";
import mail from "../../assets/mail.png";
import useInput from "./Hooks/use-input";
import { Link } from "react-router-dom";

function Contact() {
  const [plan, setPlan] = useState("");

  const {
    value: enteredName,
    hasError: nameInputhasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputhasError,
    isValid: enteredEmailisValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemailInput,
  } = useInput((value) => value.includes("@") && value.includes("."));

  const {
    value: enteredPhone,
    hasError: phoneInputhasError,
    isValid: enteredphoneisValid,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetphoneInput,
  } = useInput((value) => value.length === 10);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailisValid && enteredphoneisValid) {
    formIsValid = true;
  }

  const information = {
    name: enteredName,
    email: enteredEmail,
    phoneNumber: enteredPhone,
    subscriptionPlan: plan,
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
    resetemailInput();
    resetphoneInput();
  };

  return (
    <div className={classes.main__container}>
      <div className={classes.left__section}>
        <div className={classes.title__div}>
          <p className={classes.title}>Contact Us</p>
          <p className={classes.desc}>
            Fill up the form and owe reach out to you
          </p>
        </div>
        <div className={classes.contact__info}>
          <div className={classes.info}>
            <img src={tele} alt="phone" />
            {/* <p>+91 9697 628 628</p> */}
            <a href="tel:+91 9898989896">+91 9898989896</a>
          </div>
          <div className={classes.info}>
            <img src={mail} alt="" />
            {/* <p>team@ownerandtenant.com</p> */}
            <a href="mailto: team@ownerandtenant.com">
              team@seatseek.com
            </a>
          </div>
          <div className={classes.info}>
            <img src={location} alt="address" />
            <p>
            Survey No. 2/3/4, VIM Private Rd, Kapil Nagar, 
            Kondhwa, Pune, Maharashtra 411048
            </p>
          </div>
        </div>
      </div>
      <div className={classes.right__section}>
        <div className={classes.form__div}>
          <form onSubmit={formSubmitHandler}>
            <div>
              <div className={classes.input}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={nameChangedHandler}
                  onBlur={nameBlurHandler}
                  value={enteredName}
                />
                {nameInputhasError && (
                  <p className={classes.error}>Enter a Valid Name!</p>
                )}
              </div>

              <div className={classes.input}>
                <label htmlFor="email"> E-mail </label>
                <input
                  onChange={emailChangeHandler}
                  type="email"
                  id="email"
                  onBlur={emailBlurHandler}
                  value={enteredEmail}
                />
                {emailInputhasError && (
                  <p className={classes.error}>Enter a Valid E-mail!</p>
                )}
              </div>
              <div className={classes.input}>
                <label htmlFor="phone"> Phone Number </label>
                <input
                  onChange={phoneChangeHandler}
                  type="phone"
                  id="phone"
                  onBlur={phoneBlurHandler}
                  value={enteredPhone}
                />
                {phoneInputhasError && (
                  <p className={classes.error}>Enter a Valid Phone Number!</p>
                )}
              </div>
            </div>
            <div className={classes.btn__div}>
              <button className={classes.btn} disabled={!formIsValid}>
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
