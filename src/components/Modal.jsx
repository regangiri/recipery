import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiX } from "react-icons/fi";

export const Modal = (props) => {
  // Passing modal state from page
  const { open, setOpen } = props;

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-hidden">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-t-2xl bg-white pt-4 pb-6 px-8 text-left self-end shadow-xl transition-all lg:self-center lg:w-fit lg:rounded-2xl">
                  <div>
                    <div className="w-[60px] h-[6px] rounded-3xl bg-accent mx-auto lg:hidden"></div>
                    <FiX
                      className="hidden ml-auto cursor-pointer lg:block"
                      size={24}
                      onClick={() => setOpen(false)}
                    />
                  </div>
                  {props.children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
