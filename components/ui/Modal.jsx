import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Icon from "@/components/ui/Icon";
import { useSelector, useDispatch } from "react-redux";
import { handleLogin } from "../partials/auth/store";
import { useRouter } from "next/navigation";

const Modal = ({
  activeModal = true,
  onClose,
  noFade,
  disableBackdrop,
  className = "max-w-xl",
  children,
  footerContent,
  centered,
  scrollContent,
  themeClass = "bg-slate-900 dark:bg-slate-800 dark:border-b dark:border-slate-700",
  title = "Basic Modal",
  uncontrol,
  label = "Basic Modal",
  labelClass,
  ref,
  show = false,
  username,
  password,
}) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const data = { username: username,
                password: password 
  };
  const [hasil, setHasil] = useState(true);

  async function onSubmit(data) {
    try {
      let response = await fetch("http://localhost:8000/login/activesession", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf8",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }).then(async function (result) {
        const rez = await result.json();
        console.log(rez.session);
        if(!rez.session){
          try {
            console.log('ngelogin')
            let response = await fetch("http://localhost:8000/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json; charset=utf8",
              },
              body: JSON.stringify({
                username: data.username,
                password: data.password,
              }),
            });
            if (!response.ok) throw new Error("Login failed");
            const res = await response.json();
    
            const token = res.token;
            // console.log(token)
            document.cookie = `token=${token}; path=/`;
            // router.push("/dashboard");
            dispatch(handleLogin(true));
            setTimeout(() => {
              router.push("/dashboard");
            }, 1500);
          } catch (error) {
            console.error(error);
          }
        }else{
          setShowModal(!showModal)
        }
        // setShowModal(rez.session);
        // setHasil(rez.session);
      });
    } catch (error) { setShowModal(false);}
    // setShowModal(false);

    // if (hasil === false) {

      // try {
      //   console.log('ngelogin')
      //   let response = await fetch("http://localhost:8000/login", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json; charset=utf8",
      //     },
      //     body: JSON.stringify({
      //       username: data.username,
      //       password: data.password,
      //     }),
      //   });
      //   if (!response.ok) throw new Error("Login failed");
      //   const res = await response.json();

      //   const token = res.token;
      //   // console.log(token)
      //   document.cookie = `token=${token}; path=/`;
      //   // router.push("/dashboard");
      //   dispatch(handleLogin(true));
      //   setTimeout(() => {
      //     router.push("/dashboard");
      //   }, 1500);
      // } catch (error) {
      //   console.error(error);
      // }
    // }else if(hasil == true){
    //   setShowModal(true);
    // }
  }

  const closeModal = () => {
    setShowModal(false);
    setHasil(false);
  };

  const openModal = () => {
    onSubmit(data);
    setShowModal(showModal);
  };
  const returnNull = () => {
    return null;
  };

  return (
    <>
      {uncontrol ? (
        <>
          <button
            type="button"
            onClick={openModal}
            className={`btn ${labelClass}`}
          >
            {label}
          </button>
          <Transition appear show={showModal} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-[99999]"
              onClose={!disableBackdrop ? closeModal : returnNull}
            >
              {!disableBackdrop && (
                <Transition.Child
                  as={Fragment}
                  enter={noFade ? "" : "duration-300 ease-out"}
                  enterFrom={noFade ? "" : "opacity-0"}
                  enterTo={noFade ? "" : "opacity-100"}
                  leave={noFade ? "" : "duration-200 ease-in"}
                  leaveFrom={noFade ? "" : "opacity-100"}
                  leaveTo={noFade ? "" : "opacity-0"}
                >
                  <div className="fixed inset-0 bg-slate-900/50 backdrop-filter backdrop-blur-sm" />
                </Transition.Child>
              )}

              <div className="fixed inset-0 overflow-y-auto">
                <div
                  className={`flex min-h-full justify-center text-center p-6 ${
                    centered ? "items-center" : "items-start "
                  }`}
                >
                  <Transition.Child
                    as={Fragment}
                    enter={noFade ? "" : "duration-300  ease-out"}
                    enterFrom={noFade ? "" : "opacity-0 scale-95"}
                    enterTo={noFade ? "" : "opacity-100 scale-100"}
                    leave={noFade ? "" : "duration-200 ease-in"}
                    leaveFrom={noFade ? "" : "opacity-100 scale-100"}
                    leaveTo={noFade ? "" : "opacity-0 scale-95"}
                  >
                    <Dialog.Panel
                      className={`w-full transform overflow-hidden rounded-md
                  bg-white dark:bg-slate-800 text-left align-middle shadow-xl transition-alll ${className}`}
                    >
                      <div
                        className={`relative overflow-hidden py-4 px-5 text-white flex justify-between  ${themeClass}`}
                      >
                        <h2 className="capitalize leading-6 tracking-wider font-medium text-base text-white">
                          {title}
                        </h2>
                        <button onClick={closeModal} className="text-[22px]">
                          <Icon icon="heroicons-outline:x" />
                        </button>
                      </div>
                      <div
                        className={`px-6 py-8 ${
                          scrollContent ? "overflow-y-auto max-h-[400px]" : ""
                        }`}
                      >
                        {children}
                      </div>
                      {footerContent && (
                        <div className="px-4 py-3 flex justify-end space-x-3 border-t border-slate-100 dark:border-slate-700">
                          {footerContent}
                        </div>
                      )}
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      ) : (
        <Transition appear show={activeModal} as={Fragment}>
          <Dialog as="div" className="relative z-[99999]" onClose={onClose}>
            <Transition.Child
              as={Fragment}
              enter={noFade ? "" : "duration-300 ease-out"}
              enterFrom={noFade ? "" : "opacity-0"}
              enterTo={noFade ? "" : "opacity-100"}
              leave={noFade ? "" : "duration-200 ease-in"}
              leaveFrom={noFade ? "" : "opacity-100"}
              leaveTo={noFade ? "" : "opacity-0"}
            >
              {!disableBackdrop && (
                <div className="fixed inset-0 bg-slate-900/50 backdrop-filter backdrop-blur-sm" />
              )}
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div
                className={`flex min-h-full justify-center text-center p-6 ${
                  centered ? "items-center" : "items-start "
                }`}
              >
                <Transition.Child
                  as={Fragment}
                  enter={noFade ? "" : "duration-300  ease-out"}
                  enterFrom={noFade ? "" : "opacity-0 scale-95"}
                  enterTo={noFade ? "" : "opacity-100 scale-100"}
                  leave={noFade ? "" : "duration-200 ease-in"}
                  leaveFrom={noFade ? "" : "opacity-100 scale-100"}
                  leaveTo={noFade ? "" : "opacity-0 scale-95"}
                >
                  <Dialog.Panel
                    className={`w-full transform overflow-hidden rounded-md
                 bg-white dark:bg-slate-800 text-left align-middle shadow-xl transition-alll ${className}`}
                  >
                    <div
                      className={`relative overflow-hidden py-4 px-5 text-white flex justify-between  ${themeClass}`}
                    >
                      <h2 className="capitalize leading-6 tracking-wider font-medium text-base text-white">
                        {title}
                      </h2>
                      <button onClick={onClose} className="text-[22px]">
                        <Icon icon="heroicons-outline:x" />
                      </button>
                    </div>
                    <div
                      className={`px-6 py-8 ${
                        scrollContent ? "overflow-y-auto max-h-[400px]" : ""
                      }`}
                    >
                      {children}
                    </div>
                    {footerContent && (
                      <div className="px-4 py-3 flex justify-end space-x-3 border-t border-slate-100 dark:border-slate-700">
                        {footerContent}
                      </div>
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
};

export default Modal;
