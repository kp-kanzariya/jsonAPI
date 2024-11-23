import React from "react";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";

function Contact() {
  return (
    <div>
      {/* <Header/> */}
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Contact Us</h1>
          <p>
            Proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.4907297672!2d72.25008569347868!3d23.01990207203543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2z4KqF4Kqu4Kqm4Kq-4Kq14Kq-4KqmLCDgqpfgq4HgqpzgqrDgqr7gqqQ!5e0!3m2!1sgu!2sin!4v1727855033077!5m2!1sgu!2sin"
        width={"100%"}
        height={350}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Start Contact */}
      <div className="container py-5">
        <div className="row py-5">
          <form className="col-md-9 m-auto" method="post" role="form">
            <div className="row">
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputname">Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputemail">Email</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputsubject">Subject</label>
              <input
                type="text"
                className="form-control mt-1"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputmessage">Message</label>
              <textarea
                className="form-control mt-1"
                id="message"
                name="message"
                placeholder="Message"
                rows={8}
                defaultValue={""}
              />
            </div>
            <div className="row">
              <div className="col text-end mt-2">
                <button type="submit" className="btn btn-success btn-lg px-3">
                  Let’s Talk
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* End Contact */}
      {/* <Footer/> */}
    </div>
  );
}

export default Contact;
