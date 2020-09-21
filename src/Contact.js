import React from 'react';

const Contact = () => {
  const [show, setShow] = React.useState(false)

  const showSubmitMessage = () =>{
    return(
      show && <div className="alert alert-success">
        Thank you for the feedback
      </div>
    )
  }
  
    return(
    <div className="contact">
    <h3 className="h3">Contact Us</h3>
    <br />
    <div className="contactMain">
      {showSubmitMessage()}
    <div className="contactDetails">
    <p>Phone No: 9221378273 / 9833660294</p>
    </div>
    <div className="contactForm">
    <form>
      <input 
        className="form-control"
        type="text" 
        name="First Name" 
        placeholder="First Name"
        required
      />
      <br />
      <input 
        className="form-control"
        type="text" 
        name="Last Name" 
        placeholder="Last Name"
      />
      <br />
      <input 
        className="form-control" 
        type="email" 
        name="review" 
        placeholder="Email"
        required
      />
      <br />
      <input 
        className="form-control" 
        type="text" 
        name="review" 
        placeholder="Your Message"
        required
      />
      <br />
      <button onClick={()=>setShow(true)}
        className="btn btn-outline-dark btn-block">
        Submit
      </button>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Contact;
