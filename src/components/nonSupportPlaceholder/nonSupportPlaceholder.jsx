import React from "react";
import "./style.scss";
import { Result } from "antd";

const NonSupportPlaceholder = () => {
  return (
    <>
      <div className="nonSupportPlaceholder">
        <Result
          status="error"
          title="Sorry"
          subTitle="your device is not supported."
        ></Result>
      </div>
    </>
  );
};

export default NonSupportPlaceholder;
