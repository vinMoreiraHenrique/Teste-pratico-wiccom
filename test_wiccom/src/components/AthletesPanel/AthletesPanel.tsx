import { CommonButton } from "../CommonButton";
import { GenericCarousel } from "../GenericCarousel";
import { StyledAthletesPanelContainer, StyledImgSpanContainer } from "./styles";
import { HiArrowRight } from "react-icons/hi";

export const AthletesPanel = () => {
  return (
    <StyledAthletesPanelContainer>
      <div
        style={{
          display: "flex",
          marginBottom: "24px",
          alignItems: "space-between",
          marginLeft: "355px",
          width: "100%",
        }}
      >
        <h1 className="white-text">Conheça a tropa</h1>
        <h1 className="orange-text">Black skull</h1>
      </div>
      <GenericCarousel
        numberOfSlides={1}
        withControls={true}
        controlOffset="xs"

      >
        <div className="athletes-gallery">
          <StyledImgSpanContainer>
            <div className="athlete-info">
              <p className="athlete-name">cedric mcmillan</p>
              <p className="athlete-more-info">
                Mais informação
                <HiArrowRight style={{ marginLeft: "10px" }} />
              </p>
            </div>
            <img src="src\assets\mainImgs\athlete1.png" alt="Atleta 1" />
          </StyledImgSpanContainer>
          <StyledImgSpanContainer>
            <div className="athlete-info">
              <p className="athlete-name">cedric mcmillan</p>
              <p className="athlete-more-info">
                Mais informação
                <HiArrowRight style={{ marginLeft: "10px" }} />
              </p>
            </div>
            <img src="src\assets\mainImgs\athlete2.png" alt="" />
          </StyledImgSpanContainer>
          <StyledImgSpanContainer>
            <div className="athlete-info">
              <p className="athlete-name">cedric mcmillan</p>
              <p className="athlete-more-info">
                Mais informação
                <HiArrowRight style={{ marginLeft: "10px" }} />
              </p>
            </div>
            <img src="src\assets\mainImgs\athlete3.png" alt="" />
          </StyledImgSpanContainer>
        </div>
      </GenericCarousel>
      <CommonButton buttonText="ver todos" />
    </StyledAthletesPanelContainer>
  );
};
