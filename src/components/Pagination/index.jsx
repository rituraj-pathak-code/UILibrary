import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { getBackgroundColor, getBrightness } from "../../utils/getUserTheme";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";


const Pagination = ({
  page = 0,
  pageLimit = 10,
  totalRecords = 100,
  handleChange = () => {},
  outlined,
  rounded,
  category = "",
  disabled = false,
  size = "normal",
 
}) => {

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

  const paginationItems = getPaginationItems();

  

  return (
    <>
      <div className={`${styles.container}`}>
        <div className={styles.arrows} onClick={category!=='disabled' && handlePrevPage}>
          <FaAngleLeft color={page == numOfPages || category=='disabled' ? "gray": "black"}/>
        </div>


        {paginationItems.map((item, index) => (
              <span
                key={index}
                className={`
                  ${styles.items}
                  ${category=='disabled' && styles.item_disabled}
                  ${page == item && styles[`activeItem_${category}`]}
                  ${rounded ? styles.rounded : ''}
                  ${outlined ? styles[`outlined_${category}`] : ''}
                  ${styles[size]}
                `}
                onClick={() =>
                  typeof item === "number" && category!=='disabled' && handleChange(item)
                }
              >
                {item === "..." ? "..." : item + 1}
              </span>
            ))}


        <div className={styles.arrows} onClick={category!=='disabled' && handleNextPage}>
            <FaAngleRight color={page == numOfPages || category=='disabled' ? "gray": "black"}/>
        </div>
      </div>
    </>
  );
};

export default Pagination;
