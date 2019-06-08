import React from "react";

import Header from "./header";
import Footer from "./footer";
import Modal, { ModalContext, ModalProvider } from "./modal";

const Layout = ({ children }) => {
  return (
    <div>
      <ModalProvider>
        <Header />
        {children}
        <Modal />
        <Footer />
      </ModalProvider>
    </div>
  );
};

export default Layout;
