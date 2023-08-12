import Size32pxWrapperFalse from "./size32px-wrapper-false";

const RobustModelsContainer = ({ topicDescription }) => {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        boxSizing: "border-box",
        width: "277px",
        display: "flex",
        flexDirection: "row",
        padding: "16px 0px",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "16px",
        textAlign: "left",
        fontSize: "16px",
        color: "#e1f8fa",
        fontFamily: "Sora",
      }}
    >
      <Size32pxWrapperFalse
        imageDimensions="/vector3.svg"
        size32pxWrapperFalsePosition="unset"
        size32pxWrapperFalseTop="unset"
        size32pxWrapperFalseLeft="unset"
        vectorIconWidth="32px"
        vectorIconHeight="32px"
        vectorIconOverflow="unset"
        vectorIconFlexShrink="unset"
      />
      <div
        style={{ position: "relative", lineHeight: "24px", fontWeight: "300" }}
      >
        {topicDescription}
      </div>
    </div>
  );
};

export default RobustModelsContainer;
