import { StyledObjectivesImgContainer } from "./styles";

interface IObjectiveImgContainer {
  imgSrc: string;
  descriptiveText: string;
}

export const ObjectivesImgContainer = ({
  imgSrc,
  descriptiveText,
}: IObjectiveImgContainer) => {
  return (
    <StyledObjectivesImgContainer>
      <img src={imgSrc} alt="" />
      <div className="descriptive">
        <p>{descriptiveText}</p>
      </div>
      <div className="part1"></div>
      <div className="part2"></div>
    </StyledObjectivesImgContainer>
  );
};
