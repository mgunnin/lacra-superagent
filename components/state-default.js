import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const StateDefault = ({
  carouselBackground,
  headerText,
  bodyText,
  carouselGradient,
  askAnythingLetterSpacing,
  askAnythingColor,
  askAnythingLineHeight,
  letsUsersQuicklyColor,
  cardIconBackgroundColor,
}) => {
  const askAnythingStyle = useMemo(() => {
    return {
      ...getStyleValue("letterSpacing", askAnythingLetterSpacing),
      ...getStyleValue("color", askAnythingColor),
      ...getStyleValue("lineHeight", askAnythingLineHeight),
    };
  }, [askAnythingLetterSpacing, askAnythingColor, askAnythingLineHeight]);

  const letsUsersQuicklyStyle = useMemo(() => {
    return {
      ...getStyleValue("color", letsUsersQuicklyColor),
    };
  }, [letsUsersQuicklyColor]);

  const cardIconStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", cardIconBackgroundColor),
    };
  }, [cardIconBackgroundColor]);

  return (
    <div
      style={{
        position: "relative",
        width: "384px",
        height: "366px",
        overflow: "hidden",
        flexShrink: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        textAlign: "left",
        fontSize: "24px",
        color: "#ecedee",
        fontFamily: "Sora",
      }}
    >
      <img
        style={{
          position: "absolute",
          margin: "0",
          height: "100%",
          width: "100%",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
          zIndex: "0",
        }}
        alt=""
        src={carouselBackground}
      />
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          padding: "40px",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "20px",
          zIndex: "1",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            letterSpacing: "-0.03em",
            ...askAnythingStyle,
          }}
        >
          {headerText}
        </div>
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "300",
            color: "#9ba1a6",
            ...letsUsersQuicklyStyle,
          }}
        >
          {bodyText}
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          padding: "40px",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: "2",
          fontSize: "13px",
          color: "#e1f8fa",
          fontFamily: "'Source Code Pro'",
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: "12px",
            backgroundColor: "#ac6aff",
            width: "48px",
            height: "48px",
            overflow: "hidden",
            flexShrink: "0",
            ...cardIconStyle,
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "20px",
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
      </div>
      <img
        style={{
          position: "absolute",
          margin: "0",
          top: "calc(50% - 183px)",
          right: "0px",
          borderRadius: "200px",
          width: "362px",
          height: "366px",
          overflow: "hidden",
          flexShrink: "0",
          opacity: "0.4",
          mixBlendMode: "color-dodge",
          zIndex: "3",
        }}
        alt=""
        src={carouselGradient}
      />
    </div>
  );
};

export default StateDefault;
