import React from "react";

export default function Skills() {
  return (
    <div className="container1">
      <div className="container2">
        <h2 className="assistHeader">Skillset</h2>

        <li>
          <span className="heading">HTML</span>
          <div className="skillbar">
            <span className="html"></span>
          </div>
        </li>
        <li>
          <span className="heading">CSS</span>
          <div className="skillbar">
            <span className="css"></span>
          </div>
        </li>
        <li>
          <span className="heading">JS</span>
          <div className="skillbar">
            <span className="javascript"></span>
          </div>
        </li>
        <li>
          <span className="heading">Dart</span>
          <div className="skillbar">
            <span className="dart"></span>
          </div>
        </li>
        <li>
          <span className="heading">C++</span>
          <div className="skillbar">
            <span className="cpp"></span>
          </div>
        </li>
      </div>
    </div>
  );
}
