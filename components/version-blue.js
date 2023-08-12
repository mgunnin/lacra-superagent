import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const VersionBlue = ({ backgroundColor }) => {
  const versionBlueStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", backgroundColor),
    };
  }, [backgroundColor]);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "12px",
        backgroundColor: "#858dff",
        width: "48px",
        height: "48px",
        overflow: "hidden",
        flexShrink: "0",
        ...versionBlueStyle,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          backgroundColor: "rgba(0, 0, 0, 0.01)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ position: "relative", width: "24px", height: "24px" }}
          alt=""
          src="/vector1.svg"
        />
      </div>
    </div>
  );
};

export default VersionBlue;
