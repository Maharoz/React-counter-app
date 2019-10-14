import React from "react";

const Footer = ({data}) => {
    const footerStyle = {
        backgroundColor: "#DC143C",
        fontSize: "20px",
        color: "white",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%"
      };
      
      const phantomStyle = {
        display: "block",
        padding: "20px",
        height: "60px",
        width: "100%"
      };
      
    return (
        <div>
        <div style={phantomStyle} />
        <div style={footerStyle}>{data}</div>
      </div>
      );
    };


    export default Footer;