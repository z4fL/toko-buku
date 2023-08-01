import { Link } from "@inertiajs/react";
import React from "react";
import { navigation, socialMedia } from "./links";

const Footer = () => {
  return (
    <div className="bg-[#041C32]">
      <div className="container px-4 sm:px-6 lg:px-8 py-10 overflow-hidden">
        <div className="flex flex-wrap justify-center space-x-8 -mx-5 -my-2">
          {navigation.map((item, index) => (
            <div key={index} className="px-5 py-2">
              <Link
                as="button"
                href={item.href}
                className="text-base leading-6 text-slate-300 hover:text-white hover:underline"
                target="_blank"
                rel="noopener"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-8">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-slate-400 hover:text-white hover:underline"
              target="_blank"
              rel="noopener"
            >
              <span className="sr-only">{item.name}</span>
              <item.svg />
            </a>
          ))}
        </div>
        <hr className="my-8 border-t border-slate-400" />
        <div className="flex justify-center mt-8 space-x-8">
          <span className="text-sm text-slate-200">Z4FL @ 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
