import React from "react";
import "./styles/Style.scss";

const ErrorPage: React.FC = () => {
  return (
    <div className="errorPage">
      <div className="errCode">404</div>
      <div className="image">
        <img
          loading="lazy"
          src={`${process.env.PUBLIC_URL}/images/404.png`}
          alt="404_pickachu"
        />
      </div>
      <div className="description">Page Not Found</div>
    </div>
  );
};

export default ErrorPage;
