import "./ContactForm.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <>
  
    <section>
    <div className="title">Contactez Nous</div>
    <form onSubmit={handleSubmit}>  
      <label>Entrez votre nom:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Entrez votre email:
        <input 
          type="email" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </label>
      <label>Entrez votre message:
        <input 
          type="textearea" 
          name="message" 
          value={inputs.message || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
    </section>
   
    </>
  )
}
export default ContactForm;