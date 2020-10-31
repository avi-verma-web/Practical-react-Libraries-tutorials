import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

//custom Toast
const CustomToast = ({ closeToast }) => {
  return (
    <div>
      This is custom toast
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

const ReactToastifyDemo = () => {
  const notify = () => {
    toast("Basic Notification", { position: toast.POSITION.TOP_LEFT });
    toast.success("Basic Notification", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
    toast.info("Basic Notification", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });
    toast.warn(<CustomToast></CustomToast>, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    toast.error("Basic Notification", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast("Basic Notification", { position: toast.POSITION.BOTTOM_RIGHT });
  };
  return (
    <div>
      <button onClick={notify}>Notify</button>
    </div>
  );
};

export default ReactToastifyDemo;
