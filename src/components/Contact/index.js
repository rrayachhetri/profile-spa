
import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";


const [formState, setFormState] = useState({ name: '', email: '', message: '' });
const [errorMessage, setErrorMessage] = useState('');

function ContactForm() {

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }

        } if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }
    console.log(formState);


    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        console.log('errorMessage', errorMessage);
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" email="email" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <input type="message" name="message" defaultValue={message} rows="5" />
                </div>
                <textarea>
                    {errorMessage && (
                        <div><p className="error-text">{errorMessage}</p></div>
                    )}
                </textarea>
                <button type="submit">Submit</button>

            </form>
        </section>
    )
}
export default ContactForm;