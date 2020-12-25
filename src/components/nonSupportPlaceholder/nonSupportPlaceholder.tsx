import React from "react";
import "./style.scss";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const NonSupportPlaceholder: React.FC = () => {
  return (
    <>
      <div className="nonSupportPlaceholder">
        <ErrorOutlineIcon style={{ fontSize: 60 }} />
        <span>Sorry,</span>
        <span>your device</span>
        <span>is not supported</span>
      </div>
    </>
  );
};

export default NonSupportPlaceholder;
