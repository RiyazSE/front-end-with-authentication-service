import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                {" "}
                Feel The Fresh Ecommerce Website{" "}
              </h1>
              <p className="lead text-center fs-4 text-white">
                Be it clothing, footwear or accessories, Myntra offers you the
                ideal combination of fashion and functionality for men, women
                and kids.{" "}
              </p>
              <div className="button d-flex justify-content-center my-5 py-5">
                <button className="btn btn-light me-4  rounded-pill px-4 py-2">
                  Get Quote
                </button>
                <button className="btn btn-outline-light me-4  rounded-pill px-4 py-2">
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
