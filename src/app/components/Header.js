"use client";

import Link from "next/link";
import Image from "next/image";

const Header = ({ setModalData }) => {
  return (
    <header
      className="position-sticky"
      style={{
        zIndex: 99,
        top: 0,
        backgroundColor: "white",
      }}
    >
      <div className="w-100 px-md-5 px-3 py-3">
        <div className="d-flex justify-content-between align-items-md-center w-100 flex-column flex-md-row">
          {/* Logo */}
          <Link className="mb-3 mb-md-0" href="/">
            <Image
              src="/logo.png"
              alt="malbros-logo"
              className="logo"
              width={190}
              height={40}
              priority
            />
          </Link>

          {/* CTA Buttons */}
          <div className="d-flex gap-3">
            {/* Contact Us */}
            <button
              type="button"
              className="primary-button col-sm-6"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
              onClick={() =>
                setModalData({
                  isJob: false,
                  source: "Header Contact CTA",
                })
              }
            >
              Contact Us
            </button>

            {/* Apply Now */}
            <button
              type="button"
              className="secondary-button col-sm-6"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
              onClick={() =>
                setModalData({
                  isJob: true,
                  source: "Header Apply CTA",
                })
              }
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <hr className="m-0" />
    </header>
  );
};

export default Header;
