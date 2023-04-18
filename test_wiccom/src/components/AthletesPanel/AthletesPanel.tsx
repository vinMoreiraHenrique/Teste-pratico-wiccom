import { AthleteContainer } from "../AthleteContainer";
import { CommonButton } from "../CommonButton";
import { GenericCarousel } from "../GenericCarousel";
import { StyledAthletesPanelContainer } from "./styles";

export const AthletesPanel = () => {
  return (
    <StyledAthletesPanelContainer>
      <div
        style={{
          display: "flex",
          marginBottom: "24px",
          alignItems: "space-between",
          paddingLeft: "200px",
          width: "100%",
        }}
      >
        <h1 className="white-text">Conheça a tropa</h1>
        <h1 className="orange-text">Black skull</h1>
      </div>
      <GenericCarousel
        numberOfSlides={3}
        withControls={true}
        slidesToScroll={1}
        controlOffset="xs"
        widthCarousel="1000px"
      >
        <div className="athletes-gallery">
          <AthleteContainer
            athleteNumber="1"
            imgSrc="\static\images\athlete1.png"
          />
          <AthleteContainer
            athleteNumber="2"
            imgSrc="\static\images\athlete2.png"
          />
          <AthleteContainer
            athleteNumber="3"
            imgSrc="\static\images\athlete3.png"
          />
        </div>
      </GenericCarousel>
      <CommonButton buttonText="ver todos" />
    </StyledAthletesPanelContainer>
  );
};
