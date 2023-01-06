import { useState } from "react";

const useDisclosure = (initialOpen?: boolean) => {
  const [isOpen, setIsOpen] = useState(initialOpen || false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return { isOpen, handleOpen, handleClose };
};

export default useDisclosure;
