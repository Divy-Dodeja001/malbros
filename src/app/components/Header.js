import React from "react";
import logo from "../../../public/logo.png";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className="position-sticky"
      style={{ zIndex: "99", top: "0%", backgroundColor: "white" }}
    >
      <div className="w-100 px-md-5 px-3 py-3">
        <div className="d-flex justify-content-between w-100">
          <div className="">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="malbros-logo"
                className="logo"
                width={190}
                height={40}
              />
            </Link>
          </div>
          <div className=""></div>
        </div>
      </div>
      <hr className="m-0"></hr>
    </header>
  );
};

export default Header;
