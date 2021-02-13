import React from "react";

function TextAnimation(props) {
  return (
    <div>
      <div className="content">
        <div className="content__container">
          <p className="content__container__text">{ props.name || "Abel Rodríguez"}</p>
        </div>
      </div>
    </div>
  );
}

export default TextAnimation;
