import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { getBackgroundColor, getBrightness } from "../../utils/getUserTheme";


const Pagination = ({
  page = 0,
  pageLimit = 10,
  totalRecords = 100,
  handleChange = () => {},
  shape = "default",
  type = "default",
  disabled = false,
  size = "normal",
  variant = "",
}) => {
  const componentRef = useRef(null);
  const [theme, setTheme] = useState("");
  const numOfPages = Math.ceil(totalRecords / pageLimit);

  const handlePrevPage = () => {
    if (page != 0 && disabled == false) {
      handleChange(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < numOfPages - 1 && disabled == false) {
      handleChange(page + 1);
    }
  };

  const getPaginationItems = () => {
    const maxPagesToShow = 8;
    let pages = [];
    if (numOfPages <= maxPagesToShow) {
      pages = [...Array(numOfPages).keys()];
    } else {
      if (page < 4) {
        pages = [0, 1, 2, 3, 4, "...", numOfPages - 1];
      } else if (page > numOfPages - 5) {
        pages = [
          0,
          "...",
          numOfPages - 5,
          numOfPages - 4,
          numOfPages - 3,
          numOfPages - 2,
          numOfPages - 1,
        ];
      } else {
        pages = [0, "...", page - 1, page, page + 1, "...", numOfPages - 1];
      }
    }

    return pages;
  };

  useEffect(() => {
    const component = componentRef.current;
    console.log(component);
    if (component) {
      const backgroundColor = getBackgroundColor(component.parentElement);
      console.log(backgroundColor);
      const brightness = getBrightness(backgroundColor);
      brightness == null
        ? setTheme("light")
        : brightness > 127.5
        ? setTheme("light")
        : setTheme("dark");
    }
  }, []);

  const paginationItems = getPaginationItems();

  return (
    <>
      <div className={`${styles.container}`} ref={componentRef}>
        <div className={styles.arrows} onClick={!disabled && handlePrevPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="17"
            viewBox="0 0 24 24"
            fill={
              page == 0 || disabled
                ? "gray"
                : "black"
            }
          >
            <polygon points="15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293" />
          </svg>
        </div>


        {paginationItems.map((item, index) => (
              <span
                key={index}
                className={`
                  ${disabled ? styles.disabled : styles.items}
                  ${page == item && styles.defaultType}
                  ${page == item && disabled && styles.disabledType}
                  ${page == item && styles[type]}
                  ${styles[shape]}
                  ${
                    variant === "outlined" &&
                    item !== "..." &&
                    styles[`itemOutlined_${type}`]
                  }
                  ${styles[size]}`}
                onClick={() =>
                  typeof item === "number" && !disabled && handleChange(item)
                }
              >
                {item === "..." ? "..." : item + 1}
              </span>
            ))}


        <div
          className={styles.arrows}
          onClick={disabled !== true && handleNextPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="17"
            viewBox="0 0 24 24"
            fill={
              page == numOfPages || disabled == true
                ? "gray"
                : "black"
            }
          >
            <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Pagination;
