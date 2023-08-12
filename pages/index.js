import { Progress } from "@chakra-ui/react";
import Header from "../components/header";
import ContainerHeroForm from "../components/container-hero-form";
import ContainerCardsFieldsets from "../components/container-cards-fieldsets";
import SimulacrumAgentsContainer from "../components/simulacrum-agents-container";
import FormSection from "../components/form-section";
import Size32pxWrapperFalse from "../components/size32px-wrapper-false";
import HeroContainer from "../components/hero-container";
import BottomFooter from "../components/bottom-footer";

const HomepageAIAthletes = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#161616",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "120px",
        textAlign: "center",
        fontSize: "48px",
        color: "#e1f8fa",
        fontFamily: "Sora",
      }}
    >
      <Header />
      <ContainerHeroForm />
      <ContainerCardsFieldsets />
      <SimulacrumAgentsContainer />
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          padding: "0px 160px",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "80px",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "16px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              lineHeight: "60px",
            }}
          >
            Evolving Virtual World
          </div>
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "300",
              color: "#9ba1a6",
            }}
          >
            Lacra Labs is making a Metaverse that actually makes sense.
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            textAlign: "left",
            fontSize: "32px",
          }}
        >
          <FormSection />
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              padding: "0px 24px",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "20px",
            }}
          >
            <div
              style={{
                flex: "1",
                height: "720px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                backgroundImage: "url('766x720x-1934787470')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  padding: "60px",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "16px",
                  zIndex: "0",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "48px",
                  }}
                >
                  Virtual Arenas
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: "300",
                    color: "#9ba1a6",
                  }}
                >
                  Automatically enhance your photos using our AI app's photo
                  editing feature. Try it now!
                </div>
              </div>
              <div
                style={{
                  margin: "0",
                  position: "absolute",
                  top: "225px",
                  left: "93px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "10px",
                  zIndex: "1",
                  fontSize: "16px",
                  fontFamily: "'Source Code Pro'",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "300px",
                    height: "66px",
                    zIndex: "0",
                  }}
                  alt=""
                  src="/vector-14.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    margin: "0",
                    top: "calc(50% - 20px)",
                    left: "calc(50% - 133px)",
                    lineHeight: "20px",
                    display: "inline-block",
                    width: "244px",
                    zIndex: "1",
                  }}
                >
                  Hey Syn-001, let’s train basketball today.
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  width: "550px",
                  display: "flex",
                  flexDirection: "column",
                  padding: "48px",
                  boxSizing: "border-box",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "36px",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
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
                  >
                    Vector Databases
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      position: "relative",
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: "300",
                      color: "#9ba1a6",
                    }}
                  >
                    100M+ data points, built on decades of real-life sports and
                    esports.
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "16px",
                      backgroundColor: "#26292b",
                      display: "flex",
                      flexDirection: "row",
                      padding: "18px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Size32pxWrapperFalse
                      imageDimensions="/vector4.svg"
                      size32pxWrapperFalsePosition="unset"
                      size32pxWrapperFalseTop="unset"
                      size32pxWrapperFalseLeft="unset"
                      vectorIconWidth="24px"
                      vectorIconHeight="24px"
                      vectorIconOverflow="unset"
                      vectorIconFlexShrink="unset"
                    />
                  </div>
                  <div
                    style={{
                      borderRadius: "16px",
                      backgroundColor: "#26292b",
                      display: "flex",
                      flexDirection: "row",
                      padding: "18px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Size32pxWrapperFalse
                      imageDimensions="/vector5.svg"
                      size32pxWrapperFalsePosition="unset"
                      size32pxWrapperFalseTop="unset"
                      size32pxWrapperFalseLeft="unset"
                      vectorIconWidth="24px"
                      vectorIconHeight="24px"
                      vectorIconOverflow="unset"
                      vectorIconFlexShrink="unset"
                    />
                  </div>
                  <div
                    style={{
                      borderRadius: "16px",
                      backgroundColor: "#26292b",
                      display: "flex",
                      flexDirection: "row",
                      padding: "18px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Size32pxWrapperFalse
                      imageDimensions="/vector6.svg"
                      size32pxWrapperFalsePosition="unset"
                      size32pxWrapperFalseTop="unset"
                      size32pxWrapperFalseLeft="unset"
                      vectorIconWidth="24px"
                      vectorIconHeight="24px"
                      vectorIconOverflow="hidden"
                      vectorIconFlexShrink="0"
                    />
                  </div>
                  <div
                    style={{
                      borderRadius: "16px",
                      backgroundColor: "#26292b",
                      display: "flex",
                      flexDirection: "row",
                      padding: "18px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Size32pxWrapperFalse
                      imageDimensions="/vector7.svg"
                      size32pxWrapperFalsePosition="unset"
                      size32pxWrapperFalseTop="unset"
                      size32pxWrapperFalseLeft="unset"
                      vectorIconWidth="24px"
                      vectorIconHeight="24px"
                      vectorIconOverflow="unset"
                      vectorIconFlexShrink="unset"
                    />
                  </div>
                  <div
                    style={{
                      borderRadius: "16px",
                      backgroundColor: "#26292b",
                      display: "flex",
                      flexDirection: "row",
                      padding: "18px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Size32pxWrapperFalse
                      imageDimensions="/vector2.svg"
                      size32pxWrapperFalsePosition="unset"
                      size32pxWrapperFalseTop="unset"
                      size32pxWrapperFalseLeft="unset"
                      vectorIconWidth="24px"
                      vectorIconHeight="24px"
                      vectorIconOverflow="unset"
                      vectorIconFlexShrink="unset"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  borderRadius: "16px",
                  backgroundColor: "#0c0c0c",
                  height: "416px",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  position: "relative",
                  fontSize: "16px",
                  fontFamily: "'Source Code Pro'",
                }}
              >
                <div
                  style={{
                    width: "748px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                    boxSizing: "border-box",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    zIndex: "0",
                  }}
                >
                  <img
                    style={{
                      position: "relative",
                      width: "517px",
                      height: "400px",
                      objectFit: "cover",
                    }}
                    alt=""
                    src="/featured-synthlete@2x.png"
                  />
                </div>
                <Progress
                  style={{
                    margin: "0",
                    position: "absolute",
                    bottom: "0px",
                    left: "0px",
                    zIndex: "1",
                  }}
                  w="748px"
                  size="xs"
                  value={80}
                  colorScheme="violet"
                />
                <div
                  style={{
                    margin: "0",
                    position: "absolute",
                    top: "40px",
                    left: "20px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    zIndex: "2",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: "66px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <img
                      style={{
                        position: "relative",
                        borderRadius: "12px",
                        width: "300px",
                        height: "66px",
                      }}
                      alt=""
                      src="/vector-141.svg"
                    />
                    <div
                      style={{
                        width: "259px",
                        height: "58px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        marginLeft: "-260px",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          flex: "1",
                          display: "flex",
                          flexDirection: "row",
                          padding: "5px 0px",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "10px",
                        }}
                      >
                        <img
                          style={{
                            position: "relative",
                            borderRadius: "12px",
                            width: "35px",
                            height: "35px",
                            overflow: "hidden",
                            flexShrink: "0",
                          }}
                          alt=""
                          src="/icon.svg"
                        />
                        <div
                          style={{
                            flex: "1",
                            position: "relative",
                            lineHeight: "20px",
                          }}
                        >
                          Here’s my highlight reel for todays game.
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 10px",
                          alignItems: "flex-end",
                          justifyContent: "flex-end",
                          fontSize: "10px",
                          color: "#9ba1a6",
                          fontFamily: "'Space Grotesk'",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            letterSpacing: "0.15em",
                            lineHeight: "12px",
                            textTransform: "uppercase",
                          }}
                        >
                          just now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroContainer />
      <BottomFooter />
    </div>
  );
};

export default HomepageAIAthletes;
