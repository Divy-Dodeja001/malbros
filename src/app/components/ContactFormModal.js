"use client";

import { useState } from "react";

export default function ContactFormModal({ modalData }) {
  const { isJob, source } = modalData;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [jobTitle, setJobTitle] = useState(""); // ✅ new

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      phoneNumber,
      email,
      message,
      jobTitle: job ? jobTitle : "", // ✅ send only if job enabled
    };

    try {
      const response = await fetch("/api/contactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Your message has been sent!");

        // Reset form
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setEmail("");
        setMessage("");
        setJobTitle("");

        // Close modal
        const modalEl = document.getElementById("contactModal");
        const modalInstance =
          window.bootstrap.Modal.getInstance(modalEl) ||
          new window.bootstrap.Modal(modalEl);

        modalInstance.hide();

        // Force cleanup (fix stuck backdrop)
        setTimeout(() => {
          document.body.classList.remove("modal-open");
          document
            .querySelectorAll(".modal-backdrop")
            .forEach((bd) => bd.remove());
        }, 300);
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (error) {
      alert(`${error.message}. Please try again.`);
    }
  };

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" style={{ color: "grey" }}>
          <div className="modal-content w-100 p-2 p-md-3" style={{ backgroundColor: "black" }}>
            <div className="modal-header border-0">
              <h4 className="modal-title text-center w-100 text-light">
                Fill Details
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body text-light">
              <form onSubmit={handleSubmit}>
                <div className="d-flex mb-3" style={{ gap: "0.7em" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => {
                      const val = e.target.value.slice(0, 10);
                      setPhoneNumber(val);
                      e.target.setCustomValidity(
                        /^[6-9]\d{9}$/.test(val)
                          ? ""
                          : "Enter valid 10 digit Indian phone number"
                      );
                    }}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* ✅ Job Title Dropdown */}
                {isJob && (
                  <div className="mb-3">
                    <select
                      className="form-select"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      required
                    >
                      <option value="">Select Job Title</option>
                      <option value="Frontend Developer">Frontend Developer</option>
                      <option value="Backend Developer">Backend Developer</option>
                      <option value="Full Stack Developer">Full Stack Developer</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                    </select>
                  </div>
                )}

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <div className="my-4">
                  <button
                    type="submit"
                    className="primary-button w-100"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
