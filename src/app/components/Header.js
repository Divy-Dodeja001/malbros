"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";

const Header = ({ setModalData }) => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="position-sticky header-gradient"
      style={{
        zIndex: 99,
        top: 0,
        backgroundColor: "white",
      }}
    >
      <nav className="navbar px-md-5 px-3 py-3 d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="malbros-logo"
            className="logo"
            width={190}
            height={40}
            priority
          />
        </Link>

        {/* Hamburger (mobile only) */}
        <button
          className="d-md-none border-0 bg-transparent fs-3"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Icon icon="material-symbols:menu" width="24" height="24" />
        </button>

        {/* Desktop CTAs */}
        <div className="d-none d-md-flex gap-3">
          <button
            type="button"
            className="primary-button"
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

          <button
            type="button"
            className="secondary-button"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
            onClick={() =>
              setModalData({
                isJob: true,
                source: "Header Apply CTA",
              })
            }
          >
            Jobs at Malbros
          </button>
        </div>
      </nav>

      {/* Right Slide Menu (Mobile) */}
      <div className={`mobile-drawer d-md-none ${open ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <button
          type="button"
          className="primary-button w-100 mb-3"
          data-bs-toggle="modal"
          data-bs-target="#contactModal"
          onClick={() => {
            setOpen(false);
            setModalData({
              isJob: false,
              source: "Header Contact CTA",
            });
          }}
        >
          Contact Us
        </button>

        <button
          type="button"
          className="secondary-button w-100"
          data-bs-toggle="modal"
          data-bs-target="#contactModal"
          onClick={() => {
            setOpen(false);
            setModalData({
              isJob: true,
              source: "Header Apply CTA",
            });
          }}
        >
          Jobs at Malbros
        </button>
      </div>

      {/* Backdrop */}
      {open && <div className="drawer-backdrop" onClick={() => setOpen(false)} />}

      <hr className="m-0" />
    </header>
  );
};

export default Header;