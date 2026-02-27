import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="services-section">
      <div className="w-100 px-md-5 px-3 pb-5 pt-5">
        <div className="d-flex justify-content-between w-100 mb-4">
          <div className="">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="malbros-logo"
                className="logo"
                width={220}
                height={50}
              />
            </Link>
          </div>
        </div>
        <div className="d-md-flex justify-content-between w-100">
          <div className="mb-4">
            <h5 className="mb-2">Creating luxury, Crafting Perfection</h5>
            <small className="w-md-75 m-0">
              Crafting unforgettable celebrations with heart, elegance, and
              precision.
            </small>
          </div>
          <div className="col-md-3">
            <div className="d-none d-md-block">
              <h6 className="mb-2">Contact Us</h6>
              <a href="mailto:hello@yourbrandname.com">
                <small>
                  <span className="">Email: </span>
                  hello@yourbrandname.com
                </small>
              </a>
              <br></br>
              <a href="tel:+919876543210">
                <small>
                  <span className="">Phone: </span>+919876543210
                </small>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="">
              <h6 className="mb-2">
                <Icon
                  icon="lsicon:location-outline"
                  width="22"
                  height="22"
                  style={{ color: "#000" }}
                />{" "}
                Address
              </h6>
              <div className="p-1">
                <a href="" style={{ fontSize: "0.9em" }}>
                  Noida Office: MALBROS FURNITURES, F69, Site B Industrial Area
                  Rd, Block F, UPSIDC Site B, Surajpur, Greater Noida, Uttar
                  Pradesh 201306
                </a>
              </div>
              <div className="p-1">
                <a href="" style={{ fontSize: "0.9em" }}>
                  Delhi Office: OFFICE NO. 230 DLF prime towers, Plot No 79 &
                  80, Mata Mohalla, Pocket F, Okhla Phase I, Okhla Industrial
                  Estate, New Delhi, Delhi 110020
                </a>
              </div>
            </div>
            <div className="d-lg-none">
              <h6 className="mb-2">Contact Us</h6>
              <a href="mailto:hello@yourbrandname.com">
                <small>
                  <span className="">Email: </span>
                  hello@yourbrandname.com
                </small>
              </a>
              <br></br>
              <a href="tel:+919876543210">
                <small>
                  <span className="">Phone: </span>+919876543210
                </small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
