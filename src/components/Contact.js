import React,{useState} from "react";
import Navbar from "./Navbar";
import useNavigate from 'react-router-dom'
function Contact() {
  // const navigate = useNavigate();
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleMessageSend = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setMsg({ ...msg, [name]: value });
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    //object destructuring
    //store object data in to variables.
    const {name, email, message } = msg;
    try {
      const res = await fetch("/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("Message not sent, Try again!");
      } else {
        window.alert("Message sent Successfully");
        setMsg({
          name:"",
          email:"",
          message:""
        })
        // navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
         
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">Contact Us</h3>
              <h1 className="display-6 text-center">
                Do <b>You</b> Have Questions?
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row my-5 py-5">
            <div className="col-md-6">
              <img
                src="https://previews.123rf.com/images/puhhha/puhhha1805/puhhha180500601/101018604-girls-shopping-beautiful-happy-female-friends-with-colorful-bags-walking-in-mall-high-resolution.jpg"
                alt="contact"
                className="w-75 h-75"
              />
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit} method="POST">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                     Name
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Name"
                    name="name"
                    value={msg.name}
                    onChange={handleMessageSend}
                  />
                  {/* <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div> */}
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                 Mail address
                  </label>
                  <input
                    type="phoneNumber"
                    className="form-control"
                    // id="exampleInputPassword1"
                    placeholder="Enter Your mail address"
                    name="email"
                    value={msg.email}
                    onChange={handleMessageSend}
                  />
                  
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Enter Message
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Message"
                    rows={5}
                    name="message"
                    value={msg.message}
                    onChange={handleMessageSend}
                  />
                  
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-outline-primary">
                 <i className="fa fa-paper-plane ms-2"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
