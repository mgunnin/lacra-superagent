import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const Size32pxWrapperFalse = ({
  imageDimensions,
  size32pxWrapperFalsePosition,
  size32pxWrapperFalseTop,
  size32pxWrapperFalseLeft,
  vectorIconWidth,
  vectorIconHeight,
  vectorIconOverflow,
  vectorIconFlexShrink,
}) => {
  const size32pxWrapperFalseStyle = useMemo(() => {
    return {
      ...getStyleValue("position", size32pxWrapperFalsePosition),
      ...getStyleValue("top", size32pxWrapperFalseTop),
      ...getStyleValue("left", size32pxWrapperFalseLeft),
    };
  }, [
    size32pxWrapperFalsePosition,
    size32pxWrapperFalseTop,
    size32pxWrapperFalseLeft,
  ]);

  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", vectorIconWidth),
      ...getStyleValue("height", vectorIconHeight),
      ...getStyleValue("overflow", vectorIconOverflow),
      ...getStyleValue("flexShrink", vectorIconFlexShrink),
    };
  }, [
    vectorIconWidth,
    vectorIconHeight,
    vectorIconOverflow,
    vectorIconFlexShrink,
  ]);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "rgba(0, 0, 0, 0.01)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        ...size32pxWrapperFalseStyle,
      }}
    >
      <img
        alt=""
        src={imageDimensions}
        style={{
          position: "relative",
          width: "32px",
          height: "32px",
          ...vectorIconStyle,
        }}
      />
    </div>
  );
};

export default Size32pxWrapperFalse;
