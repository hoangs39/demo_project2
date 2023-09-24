import React, { useState, useEffect } from "react";
import PublicHome from "../page/customer/Home/CustomerHome";
import SellerHome from "../page/seller/Home/SellerHome";
import { getRole, isLoggedIn } from "../service/authService";
import AdminHome from "../page/admin/Home/AdminHome";
import { ToastContainer, Toast } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
  const [toasts, setToasts] = useState([]);

  // Function to show the toast notification
  const showToast = (message) => {
    // Add the new toast to the array of toasts
    const newToast = {
      id: Date.now(),
      message,
    };
    setToasts([...toasts, newToast]);
  };

  useEffect(() => {
    // Automatically remove the toast after 5 seconds
    const toastTimeouts = toasts.map((toast) => {
      return setTimeout(() => {
        removeToast(toast.id);
      }, 5000);
    });

    // Clean up the timeouts when the component unmounts
    return () => {
      toastTimeouts.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
    };
  }, [toasts]);

  // Function to remove a toast by its ID
  const removeToast = (id) => {
    // Filter out the toast with the specified id
    const updatedToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(updatedToasts);
  };

  return (
    <div className="app">
      <div className="">
        <ToastContainer
          className="position-fixed"
          position="top-left"
          style={{
            top: "20px",
            left: "20px",
            zIndex: 9999,
          }}
        >
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              onClose={() => removeToast(toast.id)}
              show={true}
              className="border-success w-100 mx-1 mb-2"
            >
              <Toast.Header>
                <strong className="me-auto">Notifications</strong>
              </Toast.Header>
              <Toast.Body>{toast.message}</Toast.Body>
            </Toast>
          ))}
        </ToastContainer>
      </div>

      {!isLoggedIn() && <PublicHome showToast={showToast} />}
      {isLoggedIn() && getRole() === "customer" && (
        <PublicHome showToast={showToast} />
      )}

      {isLoggedIn() && getRole() === "seller" && (
        <SellerHome showToast={showToast} />
      )}

      {isLoggedIn() && getRole() === "admin" && (
        <AdminHome showToast={showToast} />
      )}

      {/* Pass the ToastNotification component */}
    </div>
  );
}
