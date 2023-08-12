import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const Button = ({ vector, sIGNIN, buttonWidth, buttonHeight }) => {
  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("width", buttonWidth),
      ...getStyleValue("height", buttonHeight),
    };
  }, [buttonWidth, buttonHeight]);

  return (
    <div
      style={{
        position: "relative",
        width: "118px",
        height: "48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "13px",
        color: "#e1f8fa",
        fontFamily: "'Source Code Pro'",
        ...buttonStyle,
      }}
    >
      <img
        style={{
          position: "relative",
          width: "120px",
          height: "44px",
          zIndex: "0",
        }}
        alt=""
        src={vector}
      />
      <div
        style={{
          margin: "0",
          position: "absolute",
          top: "calc(50% - 3px)",
          left: "0px",
          width: "118px",
          height: "6px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "1",
        }}
      >
        <b
          style={{
            position: "relative",
            letterSpacing: "0.04em",
            lineHeight: "20px",
            textTransform: "uppercase",
          }}
        >
          {sIGNIN}
        </b>
      </div>
    </div>
  );
};

export default Button;
