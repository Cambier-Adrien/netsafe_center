import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({
    postAlert: false,
    postError: false,
    logoutAlert: false,
    logoutError: false,
    CreatePostModal: false,
    logoutDialog: false,
  });

  const toggleModal = (modalName) => {
    setModals((prev) => ({
      ...prev,
      [modalName]: !prev[modalName],
    }));
  };

  const setModalState = (modalName, state) => {
    setModals((prev) => ({
      ...prev,
      [modalName]: state,
    }));
  };

  const resetModals = () => {
    setModals((prev) => {
      const resetState = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});
      return resetState;
    });
  };

  return (
    <ModalContext.Provider
      value={{ modals, toggleModal, setModalState, resetModals }}
    >
      {children}
    </ModalContext.Provider>
  );
};