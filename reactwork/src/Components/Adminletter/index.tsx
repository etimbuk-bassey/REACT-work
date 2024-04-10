import { css } from "@emotion/css";
import React from "react";
React;

export default function Adminletter() {
  const Styles = css({
    "&": {
      maxWidth: "800px",
      margin: "20px auto",
      fontFamily: "Satoshi, sans-serif",
      backgroundImage: "url(./images/Icon.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      
      
    },
    "& .logo": {
      display: "flex",
      justifyContent: "center",
    },
    "& .title": {
      textAlign: "center",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "24.3px",
    },
    "& .title-p": {
      textAlign: "center",
      fontWeight: "700",
      fontSize: "13px",
      lineHeight: "17.5px",
      color: "#8C8C8C",
    },
    "& .profile": {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginTop: "30px",
      gap: "10px"
    },
    "& .profile-info ": {},
    "& .profile-info .table-head, .profile-contact .table-head": {
      width: "100px",
      fontWeight: "700",
      fontSize: "12px",
      lineHeight: "16.2px",
      color: "#21422f",
      height: "40px",
    },
    "& .profile-info .table-data, .profile-contact .table-data": {
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "16.2px",
    },
    "& .profile-info .span1": {
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "16.2px",
      fontStyle: "italic",
      color: "#8c8c8c",
    },
    "& .address": {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginTop: "40px",
    },
    "& .address .head1 , .head2": {
      fontWeight: "700",
      fontSize: "15.7px",
      lineHeight: "21.2px",
    },
    "& .address .head2": {
      // float: "left"
      marginLeft: "100px"
    },
    "& .address .span1 , .span2 , .span3": {
      display: "block",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "18.9px",
      textAlign: "center",
      padding: "4px 23px",
      borderRadius: "1.5px",
    },
    "& .address .span1": {
      background: "#cb4d29",
      color: "#fff",
      marginBottom: "5px",
    },
    "& .address .span2": {
      background: "rgba(0, 146, 63, 0.2)",
      marginBottom: "5px",
    },
    "& .address .span3": {
      background: "#EA8E04",
      color: "#fff",
    },
    "& .letter": {
      marginTop: "30px",
    },
    "& .letter .lett": {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    "& .letter .lett-title": {
      fontWeight: "400",
      fontSize: "15.7px",
      lineHeight: "21.2px",
      margin: "0px",
    },
    "& .letter .span4": {
      fontWeight: "400",
      fontSize: "15.7px",
      lineHeight: "21.3px",
      textAlign: "center",
      padding: "4px 23px",
      borderRadius: "1.5px",
      background: "rgba(224, 132, 11, 0.2)",
    },
    "& .letter .letter-item .letter-head": {
      fontWeight: "700",
      fontSize: "17.5px",
      lineHeight: "23.9px",
      textAlign: "center",
      textTransform: "uppercase",
    },
    "& .letter .letter-item .letter-body": {
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "21.6px",
    },
    "& .letter .letter-item .p1": {
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "21.6px",
      marginTop: "40px",
    },
    "& .letter .letter-item .p1 .p2": {
      fontWeight: "700",
    },
    "& .footer": {
      textAlign: "center",
      padding: "10px",
    },
    "& .footer-p": {
      fontWeight: "700",
      fontSize: "15px",
      lineHeight: "20.3px",
      fontStyle: "italic",
      color: "rgba(140, 140, 140, 1)",
    },
  });

  return (
    <div className={`container ${Styles}`}>
      <div className="logo">
        <img src="./images/Icon (1).png" alt="logo img" />
      </div>
      <h2 className="title">
        THE NATIONAL POSTGRADUATE MEDICAL COLLEGE OF NIGERIA
      </h2>
      <p className="title-p">ESTABLISHED BY LAW IN 1979, CAP N59, LFN 2004</p>
      <div className="profile">
        <div className="profile-info">
          <table>
            <tr>
              <td className="table-head">COLLEDGE PRESIDENT:</td>
              <td className="table-data">
                Dr. Akin Osibogun, MD, FMCPH, PNMC <br />
                <span className="span1">Professor of Public Health</span>
              </td>
            </tr>
            <tr>
              <td className="table-head">COLLEDGE VICE PRESIDENT:</td>
              <td className="table-data">
                Dr. P. N. Ebeigbe, MD, FMCOG <br />
                <span className="span1">
                  {" "}
                  Professor of Obstetrics & Gynecologic
                </span>
              </td>
            </tr>
            <tr>
              <td className="table-head">COLLEDGE TREASURER:</td>
              <td className="table-data">
                Dr. A. L. Ladeinde, MD, FMCDS <br />{" "}
                <span className="span1">
                  Professor of Oral & Maxillofacial Surg.
                </span>
              </td>
            </tr>
            <tr>
              <td className="table-head">COLLEDGE REGISTRAR:</td>
              <td className="table-data">
                Dr. F. A. Arogundade, MD, FMCP <br />{" "}
                <span className="span1">Professor of Medicine</span>
              </td>
            </tr>
          </table>
        </div>
        <div className="profile-contact">
          <tr>
            <td className="table-head">PHONE NUMBER:</td>
            <td className="table-data">(+234) 813- 6345 - 588</td>
          </tr>
          <tr>
            <td className="table-head">WEBSITE:</td>
            <td className="table-data">www.npmcn.edu.ng</td>
          </tr>
          <tr>
            <td className="table-head">ADDRESS:</td>
            <td className="table-data">
              Km 26, Lagos Badagry Expressway,
              <br /> P.M.B. 2003, Ijanikin, Lagos, Nigeria.
            </td>
          </tr>
        </div>
      </div>
      <div className="address">
        <div>
          <h2 className="head1">Our Ref:</h2>
          <span className="span1">Name</span>
          <span className="span2">Address 1</span>
          <span className="span2">Adddres 2</span>
          <span className="span2">Address 3</span>
        </div>
        <div>
          <h2 className="head2">Date:</h2>
          <span className="span3">12th June 2012</span>
        </div>
      </div>
      <div className="letter">
        <div className="lett">
          <p className="lett-title">Dr Sir</p>
          <span className="span4"> Salutations</span>
        </div>
        <div className="letter-item">
          <h2 className="letter-head">
            offer of provisional admission for postgraduate diploma in public
            health
          </h2>
          <p className="letter-body">
            <p>
              Following your application and subsequent screening, the Faculty
              of Public Health has recommended you for admission into its
              Postgraduate Diploma Programme.
              <br /> The Postgraduate Diploma Programme is
              <span style={{ fontWeight: "700" }}>
                {" "}
                a twelve (12) month
              </span>{" "}
              course of
              <span style={{ fontWeight: "700" }}> two (2) semesters</span>. The
              Programme will commence on 1st August 2023.
            </p>
            <p>
              The admission will stay Provisional until the following fees are
              paid:
            </p>
            <ol>
              <li style={{ marginBottom: "10px" }}>
                A course fee of N200,000 is to be paid once upon acceptance of
                the admission offer into the programme. Payment is to be made on
                the National Postgraduate Medical College of Nigeria’s Diploma
                Portal.
              </li>
              <li style={{ marginBottom: "10px" }}>
                Associate Diplomates Registration fee of thirty thousand naira
                (₦30,000): This is a one-time payment that must be paid via the
                National Postgraduate Medical College of Nigeria’s Diploma
                Portal.
              </li>
              <li>
                Associate Diplomates Annual Subscription fee of ten thousand
                naira (₦10,000) for one (1) year covering your course period
                payable on the National Postgraduate Medical College of
                Nigeria’s Diploma Portal.
              </li>
            </ol>
            <p>
              This must be paid upon acceptance of admission offer into the
              program
            </p>
            <p>Please accept our congratulations.</p>
          </p>

          <p className="p1">
            Yours sincerely, <br />
            <span className="p2">
              SIGNED <br /> Dr. O. O. Ekekezie, FMCPH <br /> Deputy Registrar
              <br /> (Academic)
            </span>
          </p>
        </div>
      </div>
      <div className="footer">
        <p className="footer-p">Service To Humanity</p>
      </div>
    </div>
  );
}
