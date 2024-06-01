import successIcon from "/assets/success_icon.png";
import warningIcon from "/assets/warning_icon.png";
import infoIcon from "/assets/info_icon.png";
import errorIcon from "/assets/error_icon.png";
import styles from "./index.module.css";
import Button from "../Button";
import { useEffect, useRef } from "react";

const Popup = ({
  isOpen,
  onClose = () => {},
  onConfirm,
  category,
  heading = "Heading",
  description = "Popup description",
  imageURL,
  onCloseOnBackdrop
}) => {

  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (onCloseOnBackdrop && containerRef.current && !containerRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);



  if (isOpen) {
    return (
      <div className={styles.overlay}>
        <div
        ref={containerRef}
          className={`${styles.container} ${
            imageURL
              ? styles.container_with_image
              : styles.container_without_image
          }`}
        >
          <div>
            {!imageURL ? (
              <>
                {category == "success" && <img src={successIcon} alt="icon" />}
                {category == "warning" && <img src={warningIcon} alt="icon" />}
                {category == "info" && <img src={infoIcon} alt="icon" />}
                {category == "error" && <img src={errorIcon} alt="icon" />}
              </>
            ) : (
              <img
                src={imageURL}
                alt="pop_up_image"
                className={styles.popup_image}
              />
            )}
          </div>
          <div className={styles.content}>
            <h1>{heading}</h1>
            <p>{description}</p>
          </div>
          <div className={styles.buttons}>
            {onConfirm && (
              <Button type="primary" onClick={() => onConfirm()}>
                Confirm
              </Button>
            )}
            <Button type="secondary" onClick={() => onClose()}>
              Close
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default Popup;
