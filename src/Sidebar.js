import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src={
          "https://image.shutterstock.com/image-vector/cute-little-girl-spring-260nw-337904864.jpg"
        }
        title="Simran Birla"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
      />
      <SidebarRow Icon={StoreFrontIcon} title="Market Place" />
      <SidebarRow title="Pages" Icon={EmojiFlagIcon} />
      <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
      <SidebarRow title="Friends" Icon={PeopleIcon} />

      <SidebarRow title="Messanger" Icon={ChatIcon} />
      <SidebarRow title="MarketPlace" Icon={ExpandMoreOutlined} />
    </div>
  );
};

export default Sidebar;
