import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex md:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">ToggleGood</span>
            <h1 className="text-4xl tracking-tighter font-extrabold">
              Toggle<span className="text-kaki">Good</span>
            </h1>
          </NavLink>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          <NavLink
            to="/rdv"
            className="leading-6 text-sm font-bold bg-kaki px-4 py-2 rounded-lg hover:text-base text-white"
          >
            PRENDRE RDV
          </NavLink>
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <a
            href="https://www.linkedin.com/in/comels/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 text-2xl"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">ToggleGood</span>
              <h1 className="text-4xl tracking-tighter font-extrabold">
                Toggle<span className="text-kaki">Good</span>
              </h1>
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/rdv"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-800 hover:bg-gray-50"
                >
                  Prendre rendez-vous
                </NavLink>
              </div>
              <div className="py-6">
                <a
                  href="https://www.linkedin.com/in/comels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-600 text-2xl"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
