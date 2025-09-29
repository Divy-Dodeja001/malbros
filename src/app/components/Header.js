import React from "react";
import logo from "../../../public/logo.png";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="position-sticky" style={{ zIndex: "99", top: "0%" }}>
        <div className="w-100 px-md-5 px-3 py-2">
          <div className="d-flex justify-content-between w-100">
            <div className="">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="malbros-logo"
                  className="logo"
                  width={179}
                  height={36}
                />
              </Link>
            </div>
            <div className=""></div>
          </div>
        </div>
        <hr className="m-0"></hr>
      </div>
    </header>
  );
};

export default Header;
