import React from "react";

function About() {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://media.istockphoto.com/id/1343544200/photo/shot-of-a-young-woman-shopping-for-groceries-in-a-supermarket.jpg?b=1&s=170667a&w=0&k=20&c=1gYcj_iT30o8_5eS8plLw93-EwZ4GdPFNv4O2zF0C1w="
                alt="about"
                className="w-75 mt-5"
              />
            </div>
            <div className="col-md-6">
               <h3 className="fs-5">About Us</h3>
               <h1>Who <b>We</b> are</h1>
               <hr/>
               <p className="lead mb-4">If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more.</p>
               <button className="btn btn-primary rounded-pill my-2">Get Started</button>
               <button className="btn btn-outline-primary rounded-pill my-3 mx-3">Contact Us</button>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
