import React , {useRef}  from 'react';
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact: React.FC = () => {


const myForm = useRef<HTMLFormElement>(null)

  const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  if(myForm.current) {
    emailjs
    .sendForm('service_dy6agc7', 'template_l8cohvl', myForm.current, {
      publicKey: '3qGfRZ6FocuspBObD',
    })
    .then(
      () => {
        toast.success("Message sent successfully")
        
      },
      () => {
        toast.error("There is an error on the server. Try again later :)")
      },
    );

    myForm.current.reset()
  }
  };



  return (
<div className=" contact-form ">
<div className=" container d-flex justify-content-center align-items-center ">
<form onSubmit={sendEmail} ref={myForm} className='formgmail' >
      <div className="form-group">
        <div>
          <h3 className='text-white'>Get in touch</h3>
          <p className='text-primary'>Describe your issue below. Our manager will contact you as soon as possible.</p>
        </div>
        <label className='text-white py-2' htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control shadow-none"
          id="name"
          aria-describedby="NameHelp"
          placeholder="Enter your Name"
          name='Name'
          
        
        />
      </div>

      

      
      <div className="form-group">
        
        <label className='text-white py-2' htmlFor="email">Email address</label>
        <input
          type="email"
          id='email'
          className="form-control shadow-none"
          placeholder="Enter your Email"
          name='Email'
        
        
        />
      </div>


      <div className="form-group">
        <label className='text-white py-2' htmlFor="message">Message</label>
        <textarea
          
          className="form-control shadow-none"
          id="message"
          aria-describedby="NameHelp"
          placeholder="Enter your Message"
          name='Message'
          

          
        
        />
      </div>


<div className="d-flex py-4 justify-content-center align-items-center">
<button type="submit" className="btn btn-success">Send</button>
</div>

     
    </form>
    </div>
</div>
 

   
  );
};

export default Contact;
