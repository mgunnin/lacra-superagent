import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const LacraLabsLogo = ({ lacraLabsLogoPosition, lacraLabsLogoAlignSelf }) => {
  const lacraLabsLogoStyle = useMemo(() => {
    return {
      ...getStyleValue("position", lacraLabsLogoPosition),
      ...getStyleValue("alignSelf", lacraLabsLogoAlignSelf),
    };
  }, [lacraLabsLogoPosition, lacraLabsLogoAlignSelf]);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "24px",
        textAlign: "left",
        fontSize: "24px",
        color: "#e1f8fa",
        fontFamily: "Aquire",
        ...lacraLabsLogoStyle,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <img
          style={{ position: "relative", width: "35.73px", height: "40px" }}
          alt=""
          src="/ll-mark.svg"
        />
      </div>
      <b
        style={{
          position: "relative",
          letterSpacing: "0.05em",
          lineHeight: "32px",
        }}
      >
        LACRA LABS
      </b>
    </div>
  );
};

export default LacraLabsLogo;
