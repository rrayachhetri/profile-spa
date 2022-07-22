import React, {useState} from "react";



const [formState, setFormState] = useState({name:'', email:'', message:''});


function ContactForm() {
 const {name, email, message} = formState;
 function handleChange(e){
    setFormState({...formState, [e.target.name]:e.target.value})
 }
 console.log(formState);
 function handleSubmit(e){
  e.preventDefault();
  console.log(formState);
 }

    return (
        <section>
          <h1>Contact Me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name:</label>
            <input type="text" email="email" defaultValue={name} onChange={handleChange}/>
           </div>
           <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={email}/>
           </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <input type="message" name="message" defaultValue={message} rows="5" />
                </div>
                <button type="submit">Submit</button>
            
            </form>
        </section>
    )
}
export default ContactForm;