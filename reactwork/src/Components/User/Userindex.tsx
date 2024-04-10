import { css } from "@emotion/css";
import { FaUser, FaInstagram, FaCircle } from "react-icons/fa";
import { IoCopy, IoLogOut } from "react-icons/io5";

export default function Userindex() {
  const Styles = css({
    "&": {
      fontFamily: "sans-serif",
    },
    "& .profile": {
      fontSize: "xx-large",
    },
    "& .profile .profile-icon": {
      position: "relative",
    },
    "& .profile-icon .user-icon": {
      border: "1px solid #087714",
      borderRadius: " 50px",
      width: "100px",
      height: "100px",
      textAlign: "center",
      position: "relative",
      //   zIndex:"1",
      right: "0px",
    },
    "& .profile-icon .user-icon .icon": {
      width: "50px",
      height: "60px",
      margin: "20px auto",
      color: "#087714",
    },
    "& .profile-icon .user-update-icon ": {
      textAlign: "center",
      border: "1px solid #C1C1C1",
      borderRadius: "50px",
      width: "20px",
      background:
        "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)",
      padding: "10px",
      position: "absolute",
      zIndex: "1",
      left: "85px",
      top: "170px",
    },
    "& .profile-icon .user-update-icon .icon": {
      fontSize: "20px",
      display: "block",
    },
    "& .user-info": {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "30px",
    },
    "& .user-info .info": {
      display: "flex",
      alignItems: "center",
    },
    "& .user-info .info h2": {
      margin: "0px",
    },
    "& .user-info .info .icon": {
      color: "#087714",
      fontSize: "10px",
      marginLeft: "10px",
    },
    "& .user-info .info .online": {
      marginLeft: "5px",
    },
    "& .user-info p": {
      color: "#C1C1C1",
      margin: "5px 0px",
    },
    "& .user-info .app": {
      display: "inline-block",
      borderRadius: "5px",
      background: "#ededed",
      color: "#087714",
      padding: "5px 12px",
      marginBottom: "10px",
    },
    "& .user-info .btn": {
      display: "flex",
      alignItems: "center",
    },
    "& .user-info .btn .btn-edit": {
      background: "black",
      border: "none",
      borderRadius: "3px",
      color: "white",
      padding: "7px 14px",
      marginRight: "10px",
    },
    "& .user-info .btn .btn-log": {
      display: "inline-flex",
      background: "white",
      border: "none",
      borderRadius: "3px",
      color: "black",
      padding: "7px 14px",
      marginRight: "10px",
      alignItems:"center"
    },
    "& .user-contact": {
      display: "flex",
      gap: "20px",
      marginTop: "20px",
    },
    "& .user-contact .span": {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      border: "1px solid #C1C1C1",
      borderRadius: "3px",
      padding: "7px 14px",
    },
    "& .user-contact .span p": {
      margin: "0px",
    },
    "& .user-contact .span .icon": {
      color: "#C1C1C1",
    },
    "& .other-details": {
      marginTop: "40px",
    },
    "& .other-details .p": {
      fontWeight: "bold",
    },
    "& .other-details .Details": {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 2fr))",
      gap: "20px",
    },
    "& .other-details .Details .Details-item .p1": {
      fontSize: "small",
    },
    "& .other-details .Details .Details-item .p2": {
      color: "#C1C1C1",
      fontWeight: "bold",
    },
    "& .notification": {
      marginTop: "50px",
    },
    "& .notification .p1": {
      fontSize: "small",
      fontWeight: "bold",
    },
    "& .notification .p2": {
      marginTop: "30px",
      marginRight: "10px",
    },
    "& .notification .p2 .switch": {
      position: "relative",
      display: "inline-block",
      width: "30px",
      height: "20px",
      marginLeft: "10px,",
    },

    "& .notification .p2 .switch input": {
      opacity: "0",
      width: "0",
      height: "0",
    },

    "& .notification .p2 .switch .slider": {
      position: "absolute",
      cursor: "pointer",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0px",
      backgroundColor: "#087714",
      webkitTransition: ".4s",
      Transition: ".4s",
    },

    "& .notification .p2 .switch .slider:before": {
      position: "absolute",
      content: '""',
      height: "12px",
      width: "12px",
      //   right: "0px",
      left: "px",
      bottom: "4px",
      backgroundColor: "white",
      webkitTransition: ".4s",
      transition: ".4s",
    },
    "& input:checked + .slider:before ": {
      webkitTransform: "translateX(15px)",
      msTransform: "translateX(15px)",
      transform: "translateX(15px)",
    },

    /* Rounded sliders */
    "& .notification .p2 .switch .slider.round": {
      borderRadius: "36px",
    },

    "& .notification .p2 .switch .slider.round:before": {
      borderRadius: "50%",
    },
  });

  return (
    <div className={`container ${Styles}`}>
      <p className="profile">My Profile</p>
      <div className="profile-icon">
        <div className="user-icon">
          <FaUser className="icon" />
        </div>

        <div className="user-update-icon">
          <FaInstagram className="icon" />
        </div>
      </div>
      <div className="user-info">
        <div>
          <div className="info">
            <h2>John Emeka Daniel</h2>
            <FaCircle className="icon" />
            <span className="online">Online</span>
          </div>
          <p>Ophthalmologist</p>
          <p className="app">Applicant</p>
        </div>
        <div className="btn">
          <button className="btn-edit">Edit My Profile</button>
          <button className="btn-log">
            <IoLogOut style={{ width: "20px", height: "30px" }} />
            <span className="out">Log Out</span>
          </button>
        </div>
      </div>
      <div className="user-contact">
        <span className="span">
          <p>+234 804-8484-345</p> <IoCopy className="icon" />
        </span>
        <span className="span">
          johnemeka223@gmail.com <IoCopy className="icon" />
        </span>
      </div>
      <div className="other-details">
        <p className="p">Other Details</p>
        <div className="Details">
          <div className="Details-item">
            <p className="p1">Gender:</p>
            <p className="p2">Male</p>
          </div>
          <div className="Details-item">
            <p className="p1">Date of birth:</p>
            <p className="p2">12th December 1955</p>
          </div>
          <div className="Details-item">
            <p className="p1">Contact Address:</p>
            <p className="p2">Welton Street Off Atiku Abubakar Avenue, Uyo</p>
          </div>
          <div className="Details-item">
            <p className="p1">State of Origin:</p>
            <p className="p2">Anambra State</p>
          </div>
          <div className="Details-item">
            <p className="p1">State of Domicile:</p>
            <p className="p2">Lagos State</p>
          </div>
        </div>
      </div>
      <div className="notification">
        <p className="p1">Notification Settings</p>
        <div>
          <p className="p2">
            Allow for push notifications
            <label className="switch" style={{ marginLeft: "30px" }}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </p>
          <p className="p2">
            Notify me of All process updates to applications
            <label className="switch" style={{ marginLeft: "30px" }}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </p>
        </div>
      </div>
    </div>
  );
}
