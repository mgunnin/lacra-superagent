import Button from "./button";

const HeroContainer = () => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "50px",
        textAlign: "center",
        fontSize: "60px",
        color: "#e1f8fa",
        fontFamily: "Sora",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                lineHeight: "72px",
                fontWeight: "600",
              }}
            >
              <p style={{ margin: "0" }}>{`Be part of the future of `}</p>
              <p style={{ margin: "0" }}>AI Athletes</p>
            </div>
            <img
              style={{
                position: "relative",
                borderRadius: "4px",
                width: "311.69px",
                height: "13.98px",
              }}
              alt=""
              src="/underline.svg"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              fontSize: "20px",
              color: "#9ba1a6",
            }}
          >
            <div style={{ position: "relative", lineHeight: "32px" }}>
              <p style={{ margin: "0" }}>
                Claim your spot in the future of athleticism, entertainment and
                technology.
              </p>
              <p style={{ margin: "0" }}>Join the waiting list today!</p>
            </div>
          </div>
        </div>
      </div>
      <Button
        vector="/vector.svg"
        sIGNIN="WAITING LIST"
        buttonWidth="118px"
        buttonHeight="48px"
      />
    </div>
  );
};

export default HeroContainer;
