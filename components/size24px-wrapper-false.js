import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const Size24pxWrapperFalse = ({
  vector,
  size24pxWrapperFalsePosition,
  size24pxWrapperFalseTransform,
  size24pxWrapperFalseTransformOrigin,
  vectorIconOverflow,
  vectorIconFlexShrink,
  vectorIconWidth,
  vectorIconHeight,
}) => {
  const size24pxWrapperFalseStyle = useMemo(() => {
    return {
      ...getStyleValue("position", size24pxWrapperFalsePosition),
      ...getStyleValue("transform", size24pxWrapperFalseTransform),
      ...getStyleValue("transformOrigin", size24pxWrapperFalseTransformOrigin),
    };
  }, [
    size24pxWrapperFalsePosition,
    size24pxWrapperFalseTransform,
    size24pxWrapperFalseTransformOrigin,
  ]);

  const vectorIcon1Style = useMemo(() => {
    return {
      ...getStyleValue("overflow", vectorIconOverflow),
      ...getStyleValue("flexShrink", vectorIconFlexShrink),
      ...getStyleValue("width", vectorIconWidth),
      ...getStyleValue("height", vectorIconHeight),
    };
  }, [
    vectorIconOverflow,
    vectorIconFlexShrink,
    vectorIconWidth,
    vectorIconHeight,
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
        ...size24pxWrapperFalseStyle,
      }}
    >
      <img
        alt=""
        src={vector}
        style={{
          position: "relative",
          width: "24px",
          height: "24px",
          ...vectorIcon1Style,
        }}
      />
    </div>
  );
};

export default Size24pxWrapperFalse;
