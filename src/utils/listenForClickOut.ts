const listenForClickOut = (
  listening: boolean,
  setListening: React.Dispatch<React.SetStateAction<boolean>>,
  menuRef: React.MutableRefObject<any>,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return () => {
    if (listening) return;
    if (!menuRef?.current) return;
    setListening(true);
    [`click`, `touchstart`]?.forEach((type) => {
      document?.addEventListener(`click`, (evt) => {
        if (menuRef?.current?.contains(evt?.target)) return;
        setIsOpen(false);
      });
    });
  };
};

export default listenForClickOut;
