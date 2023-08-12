import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const VersionPinkIcon = ({
  imageDimensions,
  versionPinkIconPosition,
  versionPinkIconWidth,
  versionPinkIconHeight,
  versionPinkIconMargin,
  versionPinkIconTop,
  versionPinkIconRight,
  versionPinkIconBottom,
  versionPinkIconLeft,
  versionPinkIconMaxWidth,
  versionPinkIconOverflow,
  versionPinkIconMaxHeight,
  versionPinkIconZIndex,
  versionPinkIconBorderRadius,
  versionPinkIconObjectFit,
}) => {
  const versionPinkIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", versionPinkIconPosition),
      ...getStyleValue("width", versionPinkIconWidth),
      ...getStyleValue("height", versionPinkIconHeight),
      ...getStyleValue("margin", versionPinkIconMargin),
      ...getStyleValue("top", versionPinkIconTop),
      ...getStyleValue("right", versionPinkIconRight),
      ...getStyleValue("bottom", versionPinkIconBottom),
      ...getStyleValue("left", versionPinkIconLeft),
      ...getStyleValue("maxWidth", versionPinkIconMaxWidth),
      ...getStyleValue("overflow", versionPinkIconOverflow),
      ...getStyleValue("maxHeight", versionPinkIconMaxHeight),
      ...getStyleValue("zIndex", versionPinkIconZIndex),
      ...getStyleValue("borderRadius", versionPinkIconBorderRadius),
      ...getStyleValue("objectFit", versionPinkIconObjectFit),
    };
  }, [
    versionPinkIconPosition,
    versionPinkIconWidth,
    versionPinkIconHeight,
    versionPinkIconMargin,
    versionPinkIconTop,
    versionPinkIconRight,
    versionPinkIconBottom,
    versionPinkIconLeft,
    versionPinkIconMaxWidth,
    versionPinkIconOverflow,
    versionPinkIconMaxHeight,
    versionPinkIconZIndex,
    versionPinkIconBorderRadius,
    versionPinkIconObjectFit,
  ]);

  return (
    <img
      alt=""
      src={imageDimensions}
      style={{
        position: "relative",
        width: "384px",
        height: "366px",
        ...versionPinkIconStyle,
      }}
    />
  );
};

export default VersionPinkIcon;
