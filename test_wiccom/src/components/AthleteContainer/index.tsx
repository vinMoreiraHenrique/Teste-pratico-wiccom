import { HiArrowRight } from "react-icons/hi";
import { StyledImgSpanContainer } from "./styles";

interface IAthleteContainer {
    imgSrc: string;
    athleteNumber: string;
}

export const AthleteContainer = ({imgSrc, athleteNumber}: IAthleteContainer) => {
    return(
        <StyledImgSpanContainer>
            <div className="athlete-info">
              <p className="athlete-name">cedric mcmillan</p>
              <p className="athlete-more-info">
                Mais informação
                <HiArrowRight style={{ marginLeft: "10px", cursor: "pointer" }} />
              </p>
            </div>
            <img src={imgSrc} alt={`Atleta ${athleteNumber}`}  />
          </StyledImgSpanContainer>
    )
}