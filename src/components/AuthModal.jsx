import React from "react";

const AuthModal = ({ isOpen, onClose }) => {
  if (isOpen) return null;

  const handleclose = () => {
    onclose(true);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="absolute inset-0" onClick={handleclose}></div>
    </div>
  );
};
export default AuthModal;
