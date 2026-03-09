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
          <div className="mb-5 mb-md-4">
            <h5 className="mb-2">Creating luxury, Crafting Perfection</h5>
          </div>
          <div className="col-md-3">
            <div className="d-none d-md-block">
              <h6 className="mb-1">Contact Us</h6>
              <a href="mailto:info@malbrosfurnitures.com">
                <small>
                  <span className="">Email: </span>
                  info@malbrosfurnitures.com
                </small>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-4">
              <h6 className="mb-1">
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
                  <span className="fw-medium">Noida Office:</span> MALBROS FURNITURES, F69, Site B Industrial Area
                  Rd, Block F, UPSIDC Site B, Surajpur, Greater Noida, Uttar
                  Pradesh 201306
                </a>
              </div>
              <div className="p-1 mt-2">
                <a href="" style={{ fontSize: "0.9em" }}>
                  <span className="fw-medium">Delhi Office:</span> OFFICE NO. 230 DLF prime towers,
                  Plot No 79 & 80, Mata Mohalla, Pocket F, Okhla Phase I, Okhla
                  Industrial Estate, New Delhi, Delhi 110020
                </a>
              </div>
            </div>
            <div className="d-lg-none">
              <h6 className="mb-1">Contact Us</h6>
              <a href="mailto:info@malbrosfurnitures.com">
                <small>
                  <span className="">Email: </span>
                  info@malbrosfurnitures.com
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
