import RobustModelsContainer from "./robust-models-container";

const FormSection = () => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        borderBottom: "2px solid rgba(252, 252, 252, 0.2)",
        boxSizing: "border-box",
        height: "802px",
        display: "flex",
        flexDirection: "row",
        padding: "0px 80px",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        gap: "20px",
        textAlign: "left",
        fontSize: "32px",
        color: "#e1f8fa",
        fontFamily: "Sora",
      }}
    >
      <input
        style={{
          border: "2px solid rgba(255, 255, 255, 0.25)",
          fontWeight: "600",
          fontFamily: "'Source Code Pro'",
          fontSize: "16px",
          backgroundColor: "rgba(0, 0, 0, 0.56)",
          margin: "0",
          position: "absolute",
          top: "711px",
          left: "calc(50% - 292px)",
          borderRadius: "24px",
          backdropFilter: "blur(4px)",
          boxSizing: "border-box",
          width: "766px",
          overflow: "hidden",
          flexShrink: "0",
          display: "flex",
          flexDirection: "row",
          padding: "11px 22px",
          alignItems: "center",
          justifyContent: "flex-start",
          zIndex: "0",
        }}
        type="text"
        placeholder="Synthlete training in progress"
      />
      <div
        style={{
          alignSelf: "stretch",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          zIndex: "1",
        }}
      >
        <img
          style={{
            alignSelf: "stretch",
            position: "relative",
            maxWidth: "100%",
            overflow: "hidden",
            height: "800px",
            flexShrink: "0",
            objectFit: "cover",
          }}
          alt=""
          src="/image1@2x.png"
        />
      </div>
      <div
        style={{
          alignSelf: "stretch",
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          zIndex: "2",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "50px",
          }}
        >
          <div
            style={{
              width: "350px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "16px",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "48px",
              }}
            >{`Athletes & Trainers`}</div>
            <div
              style={{
                position: "relative",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "300",
                color: "#9ba1a6",
                display: "inline-block",
                width: "265px",
              }}
            >
              Lacra Labs unlocks the potential of AI-powered applications
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              fontSize: "16px",
            }}
          >
            <RobustModelsContainer topicDescription="Robust models" />
            <RobustModelsContainer topicDescription="Symbiotic relationships" />
            <RobustModelsContainer topicDescription="Influencer ready" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
