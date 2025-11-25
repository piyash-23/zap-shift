import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router";
import you from "../../assets/youtube.png";
import face from "../../assets/facebook.png";
import x from "../../assets/x.png";
import link from "../../assets/lnkin.png";

const Footer = () => {
  const links = (
    <>
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <Link>Coverage</Link>
      </li>
      <li>
        <Link>About Us</Link>
      </li>
      <li>
        <Link>Pricing</Link>
      </li>
      <li>
        <Link>Be a Rider</Link>
      </li>
    </>
  );
  return (
    <>
      <div>
        <footer className="footer footer-horizontal footer-center bg-[#0b0b0b] rounded-3xl p-10">
          <aside className="text-white">
            <div>
              <Logo></Logo>
            </div>
            <p>
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments — we
              deliver on time, every time.
            </p>
          </aside>
          <div className="w-full border-1 border-dashed border-[#03464D]"></div>
          <nav>
            <div>
              <ul className="menu menu-horizontal text-white">{links}</ul>
            </div>
          </nav>
          <div className="w-full border-1 border-dashed border-[#03464D]"></div>
          <div className="grid grid-flow-col gap-4">
            <img src={link} alt="Linked In" />
            <img src={x} alt="X" />
            <img src={face} alt="Facebook" />
            <img src={you} alt="You Tube" />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
