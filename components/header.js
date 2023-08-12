import LacraLabsLogo from "./lacra-labs-logo";
import Button from "./button";

const Header = () => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        backgroundColor: "rgba(14, 12, 21, 0.12)",
        backdropFilter: "blur(32px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 80px",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
        fontSize: "12px",
        color: "rgba(255, 255, 255, 0.5)",
        fontFamily: "'Source Code Pro'",
      }}
    >
      <LacraLabsLogo
        lacraLabsLogoPosition="unset"
        lacraLabsLogoAlignSelf="stretch"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "32px 48px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "relative",
            zIndex: "3",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "0.04em",
              lineHeight: "20px",
              textTransform: "uppercase",
              fontWeight: "600",
              zIndex: "0",
            }}
          >
            ARENAVERSE
          </div>
          <div
            style={{
              position: "absolute",
              margin: "0",
              bottom: "0px",
              left: "0px",
              backgroundColor: "#26292b",
              width: "1px",
              height: "8px",
              zIndex: "1",
            }}
          />
          <div
            style={{
              position: "absolute",
              margin: "0",
              right: "0px",
              bottom: "0px",
              backgroundColor: "#26292b",
              width: "1px",
              height: "8px",
              opacity: "0",
              zIndex: "2",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "32px 48px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "relative",
            zIndex: "2",
            marginLeft: "-1px",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "0.04em",
              lineHeight: "20px",
              textTransform: "uppercase",
              fontWeight: "600",
              zIndex: "0",
            }}
          >
            SYNTHLETES
          </div>
          <div
            style={{
              position: "absolute",
              margin: "0",
              bottom: "0px",
              left: "0px",
              backgroundColor: "#26292b",
              width: "1px",
              height: "8px",
              zIndex: "1",
            }}
          />
          <div
            style={{
              position: "absolute",
              margin: "0",
              right: "0px",
              bottom: "0px",
              backgroundColor: "#26292b",
              width: "1px",
              height: "8px",
              opacity: "0",
              zIndex: "2",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "32px 48px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "relative",
            zIndex: "1",
            marginLeft: "-1px",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "0.04em",
              lineHeight: "20px",
              textTransform: "uppercase",
              fontWeight: "600",
              zIndex: "0",
            }}
          >
            DOCS
          </div>
          <div
            style={{
              position: "absolute",
              margin: "0",
              bottom: "0px",
              left: "0px",
              backgroundColor: "#26292b",
              width: "1px",
              height: "8px",
              zIndex: "1",
            }}
          />
          <div
            style={{
              position: "absolute",
              margin: "0",
              right: "0px",
              bottom: "0px",
              backgroundColor: "#26292b",
              width: "1px",
              height: "8px",
              opacity: "0",
              zIndex: "2",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "32px 48px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "relative",
            zIndex: "0",
            marginLeft: "-1px",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "0.04em",
              lineHeight: "20px",
              textTransform: "uppercase",
              fontWeight: "600",
              zIndex: "0",
            }}
          >
            roadmap
          </div>
          <div
            style={{
              position: "absolute",
              margin: "0",
              bottom: "0px",
              left: "0px",
              backgroundColor: "#26292b",
              width: "1px",
              height: "8px",
              zIndex: "1",
            }}
          />
          <div
            style={{
              position: "absolute",
              margin: "0",
              right: "0px",
              bottom: "0px",
              backgroundColor: "#26292b",
              width: "1px",
              height: "8px",
              zIndex: "2",
            }}
          />
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "32px",
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
          new account
        </b>
        <Button
          vector="/vector.svg"
          sIGNIN="SIGN IN"
          buttonWidth="118px"
          buttonHeight="48px"
        />
      </div>
    </div>
  );
};

export default Header;
