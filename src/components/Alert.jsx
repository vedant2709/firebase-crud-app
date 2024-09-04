import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";

function Alert({ message }) {
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    if (message) {
      setIsClosed(false); // Reset the isClosed state whenever a new message is received
    }
  }, [message]);

  const handleClose = () => {
    setIsClosed(true);
  };

  if (isClosed || !message) return null; // Return null if the alert is closed or there is no message

  return (
    <div className={`min-w-[20vw] flex justify-center items-center gap-2 py-2 ${message.error ? 'bg-red-400 border-2 border-red-600' : 'bg-green-400 border-2 border-green-600'} rounded-md absolute top-[13%] right-5 font-semibold text-xl text-black px-3`}>
      {message.msg}
      <IoClose size={"25px"} onClick={handleClose} className='cursor-pointer' />
    </div>
  );
}

export default Alert;
