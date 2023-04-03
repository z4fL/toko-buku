import { Link } from "@inertiajs/react";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Top Footer */}
      <div></div>
      {/* Bottom Footer */}
      <div className="bg-[#041C32] p-4 flex items-center justify-center">
        <span className="text-sm text-slate-200">
          <Link
            as="button"
            href="https://github.com/ZAAAAFL"
            className="hover:underline hover:text-white"
            target="_blank"
            rel="noopener"
          >
            Z4FL
          </Link>{" "}
          @ 2023
        </span>
      </div>
    </div>
  );
};

export default Footer;
