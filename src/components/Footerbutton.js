import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footerbuttons(props) {
  return (
    <div style={{ backgroundColor: "white" }} className="container1">
      <div className="footer">
        <p className="conDetails">Contact : {props.phone}</p>
        <div className="socialIcons">
          <SocialIcon
            style={{ display: "flex", height: "3vw", width: "3vw" }}
            className="social"
            url="https://www.linkedin.com/in/mrinmoy-goswami-83a1431b7/"
          />
          <SocialIcon
            style={{ display: "flex", height: "3vw", width: "3vw" }}
            className="social"
            url="https://github.com/Mrinmoy-Goswami"
          />
          <SocialIcon
            style={{ display: "flex", height: "3vw", width: "3vw" }}
            className="social"
            url="https://twitter.com/Mrinmoy58604577"
          />
          <SocialIcon
            style={{ display: "flex", height: "3vw", width: "3vw" }}
            className="social"
            url="https://www.facebook.com/mrinmoy.goswami.5205"
          />
          <SocialIcon
            style={{ display: "flex", height: "3vw", width: "3vw" }}
            className="social"
            url="https://www.instagram.com/go_mrin/"
          />
        </div>
        <p className="conDetails">
          <span
            style={{
              display: "flex",
              fontSize: "2vw",
              paddingTop: ".4vw",
              marginLeft: "0vw",
            }}
            class="material-symbols-outlined"
          >
            mail
          </span>
          {props.mail}
        </p>
      </div>
      <div>
        <p className="conDetails">
          <span
            style={{
              height: "3vw",
              width: "3vw",

              marginLeft: "0vw",
              fontSize: "2vw",
            }}
            class="material-symbols-outlined"
          >
            copyright
          </span>
          Mrinmoy Goswami
        </p>
      </div>
    </div>
  );
}
