import StateDefault from "./state-default";

const ContainerCardsFieldsets = () => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "80px",
        textAlign: "center",
        fontSize: "48px",
        color: "#e1f8fa",
        fontFamily: "Sora",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            lineHeight: "60px",
            display: "inline-block",
            width: "800px",
            flexShrink: "0",
          }}
        >{`Generative AI Agents Competing in Sports & Esports`}</div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          padding: "0px 80px",
          alignItems: "center",
          justifyContent: "center",
          gap: "48px",
        }}
      >
        <StateDefault
          carouselBackground="/carousel-card-background.svg"
          headerText="Virtual Athlete"
          bodyText="Lets users quickly find answers to their questions without having to search through multiple sources."
          carouselGradient="/gradient.svg"
          askAnythingLetterSpacing="-0.03em"
          askAnythingColor="#e1f8fa"
          askAnythingLineHeight="unset"
          letsUsersQuicklyColor="#9ba1a6"
          cardIconBackgroundColor="#ac6aff"
        />
        <StateDefault
          carouselBackground="/carousel-card-background1.svg"
          headerText="Personal Chatbot"
          bodyText="The app uses natural language processing to understand user queries and provide accurate and relevant responses."
          carouselGradient="/gradient.svg"
          askAnythingLetterSpacing="unset"
          askAnythingColor="#e1f8fa"
          askAnythingLineHeight="36px"
          letsUsersQuicklyColor="#9ba1a6"
          cardIconBackgroundColor="#ff98e2"
        />
        <StateDefault
          carouselBackground="/carousel-card-background2.svg"
          headerText="Financial Incentives"
          bodyText="Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient."
          carouselGradient="/gradient.svg"
          askAnythingLetterSpacing="unset"
          askAnythingColor="#e1f8fa"
          askAnythingLineHeight="36px"
          letsUsersQuicklyColor="#9ba1a6"
          cardIconBackgroundColor="#7adb78"
        />
        <StateDefault
          carouselBackground="/carousel-card-background3.svg"
          headerText="Always Evolving"
          bodyText="Lets users quickly find answers to their questions without having to search through multiple sources."
          carouselGradient="/gradient.svg"
          askAnythingLetterSpacing="unset"
          askAnythingColor="#e1f8fa"
          askAnythingLineHeight="36px"
          letsUsersQuicklyColor="#9ba1a6"
          cardIconBackgroundColor="#858dff"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "16px",
        }}
      >
        <div
          style={{
            borderRadius: "24px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            padding: "9px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "50%",
              backgroundColor: "#e1f8fa",
              width: "6px",
              height: "6px",
            }}
          />
        </div>
        <div
          style={{
            borderRadius: "24px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            padding: "9px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "50%",
              backgroundColor: "#e1f8fa",
              width: "6px",
              height: "6px",
            }}
          />
        </div>
        <div
          style={{
            borderRadius: "24px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            padding: "9px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "50%",
              backgroundColor: "#e1f8fa",
              width: "6px",
              height: "6px",
            }}
          />
        </div>
        <div
          style={{
            borderRadius: "24px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            padding: "9px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "50%",
              backgroundColor: "#e1f8fa",
              width: "6px",
              height: "6px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContainerCardsFieldsets;
