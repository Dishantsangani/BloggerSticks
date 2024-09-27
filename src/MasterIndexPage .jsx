import React from "react";

const MasterIndexPage = () => {
  const classes = useStyles(); // Ensure this hook is defined or imported

  const [isAndroid, setIsAndroid] = useState(false);
  const [isApple, setIsApple] = useState(false);
  const [isWindows, setIsWindows] = useState(false);

  useEffect(() => {
    if (navigator.userAgent.match(/Android/i)) {
      setIsAndroid(true);
    } else if (navigator.userAgent.match(/iPhone|iPod/i)) {
      setIsApple(true);
    } else {
      setIsWindows(true);
    }
  }, []);

  return (
    <section>
      {isApple && <Test />}{" "}
      {/* Only show the Test component if the platform is Apple */}
    </section>
  );
};

const Test = () => {
  const classes = useStyles(); // Ensure this hook is defined or imported

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div id="popup">
          <h4 className="h4_addtohome">
            Add Our App?
            <span className="popup-close-icon" onClick={handleClose}>
              &times;
            </span>
          </h4>
          <p className="p__addtohome">
            Tap below to add an icon to your home screen for quick access!
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default MasterIndexPage;
