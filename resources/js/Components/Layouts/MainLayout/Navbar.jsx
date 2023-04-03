import React, { Fragment, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import { AppContext } from "@/context/app-context";

const navigation = [
  {
    name: "Home",
    href: "/",
    current: false,
  },
  {
    name: "Books",
    href: "/book",
    current: false,
  },
  {
    name: "About",
    href: "/about",
    current: false,
  },
];

const Navbar = () => {
  const context = useContext(AppContext);

  return (
    <Disclosure as="nav" className="bg-[#041C32]">
      {({ open }) => (
        <>
          <div className="container px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <img
                      className="h-8 w-auto"
                      src="/images/logo.png"
                      alt="logo zafl"
                    />
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={`${
                          item.current
                            ? "bg-slate-700 text-white"
                            : "text-slate-300 hover:bg-slate-700 hover:text-white"
                        } px-3 py-2 rounded-md text-base font-medium`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {context.user ? (
                  <>
                    <button
                      type="button"
                      className="rounded-full bg-slate-900 p-1 text-slate-400 hover:text-white"
                    >
                      <span className="sr-only">View notification</span>
                      <ShoppingCartIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                    {/* Profile Dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-transparent text-slate-400 hover:text-white text-sm">
                          <span className="sr-only">Open User Menu</span>
                          <UserIcon className="h-6 w-6" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/profile"
                                as="button"
                                className={`${
                                  active ? "bg-slate-100" : ""
                                } block px-4 py-2 text-sm text-slate-700`}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/logout"
                                as="button"
                                method="POST"
                                className={`${
                                  active ? "bg-slate-100" : ""
                                } block px-4 py-2 text-sm text-slate-700`}
                              >
                                Logout
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </>
                ) : (
                  <Link
                    as="button"
                    href="/login"
                    className="text-slate-300 hover:bg-slate-700 hover:text-white focus:outline-none px-3 py-2 rounded-md text-base font-medium"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item, index) => (
                <Disclosure.Button
                  key={index}
                  as={Link}
                  href={item.href}
                  className={`${
                    item.current
                      ? "bg-slate-900 text-white"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white"
                  } block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
