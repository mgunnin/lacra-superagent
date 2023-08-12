import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const TextInputContainer = ({ textInputContainerPosition }) => {
  const textInputContainerStyle = useMemo(() => {
    return {
      ...getStyleValue("position", textInputContainerPosition),
    };
  }, [textInputContainerPosition]);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "20px",
        textAlign: "left",
        fontSize: "13px",
        color: "#e1f8fa",
        fontFamily: "'Source Code Pro'",
        ...textInputContainerStyle,
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
        explore more
      </b>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.01)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            position: "relative",
            width: "24px",
            height: "24px",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/chevron-right.svg"
        />
      </div>
    </div>
  );
};

export default TextInputContainer;
