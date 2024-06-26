import React, { useState } from 'react'
import dashboardIcon from "../../assets/icons/dashboardIcon.svg"
import downArrow from "../../assets/icons/downArrow.svg"
import upArrow from "../../assets/icons/upArrow.svg"
import style from "./index.module.css"
import sidebarOpen from '/assets/sidebar_open.png'
import sidebarClose from '/assets/sidebar_close.png'
import { FaAngleRight } from "react-icons/fa";

const Sidebar = ({handleNavigate, collapsible=false}) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleClick = () => {
        setIsCollapsed(!isCollapsed);
    };

    const SIDEBAR_ITEMS = [
        {
            label: "Home",
            subMenuItems: [],
            route: "/",
            expanded: false,
            icon: "icon"
        },
        {
            label: "Buttons",
            subMenuItems: [],
            route: "/buttons",
            expanded: false,
            icon: "icon"
        },
        {
            label: "Pagination",
            subMenuItems: [],
            route: "/pagination",
            expanded: false,
            icon: "icon"
        },
        {
            label: "Textfield",
            subMenuItems: [],
            route: "/textfield",
            expanded: false,
            icon: "icon"
        },
        {
            label: "Chips",
            subMenuItems: [],
            route: "/chips",
            expanded: false,
            icon: "icon"
        },
        {
            label: "Accordions",
            subMenuItems: [],
            route: "/accordion",
            expanded: false,
            icon: "icon"
        },
        {
            label: "Radio Buttons",
            subMenuItems: [],
            route: "/radiobuttons",
            expanded: false,
            icon: "icon"
        },
        {
            label: "Tabs",
            subMenuItems: [],
            route: "/tabs",
            expanded: false,
            icon: "icon"
        },
       
        {
            label: "Checkbox",
            subMenuItems: [],
            route: "/checkboxes",
            expanded: false,
            icon: "icon"
        },
        {
            label: "Popup",
            subMenuItems: [],
            route: "/popup",
            expanded: false,
            icon: "icon"
        },
        {
            label: "Dropdown",
            subMenuItems: [],
            route: "/dropdown",
            expanded: false,
            icon: "icon"
        },
        {
            label: "Stepper",
            subMenuItems: [],
            route: "/stepper",
            expanded: false,
            icon: "icon"
        }
    ]
    return (
        <div className={`${style.sidebarContainer} ${collapsible && isCollapsed ? style.collapsed : style.expanded} subHeadingText`}>
            {collapsible && 
            <div className={`${style.collapseIcon} ${isCollapsed && style.collapseIcon_collapsed}`} onClick={handleClick}>
                 <img src={isCollapsed ? sidebarOpen: sidebarClose} alt="" />
             </div>
            }
           
            {SIDEBAR_ITEMS?.map((item, key) =>
                <div className={style.sidebarBox} key={key}>
                    <div className={`${style.sidebarDivwithIcons} ${window.location.pathname == item.route && style.activeMenu}`} onClick={()=>{handleNavigate(item,key)}}>
                        <span><FaAngleRight/></span>
                        {!isCollapsed && <p className={style.navItem} >{item.label}</p>}
                    </div>
                    {!isCollapsed && item?.subMenuItems?.length > 0 && <div >
                        {item.expanded ? <img src={upArrow} alt="arrowIcon" width={"10px"} /> : <img src={downArrow} alt="arrowIcon" width={"10px"} />}
                    </div>}
                </div>
            )}
        </div>
    )
}

export default Sidebar