import { CommonButton } from "../CommonButton";
import { StyledBlackbox } from "./styles";

interface IBlackBox {
  whiteText: string;
  orangeText: string;
  imgSrc: string;
  buttonText: string;
}

export const BlackBox = ({ whiteText, orangeText, imgSrc, buttonText }: IBlackBox) => {
  return (
    <StyledBlackbox>
      <div className="text-box">
          <h1 className="white-text">{whiteText}</h1>
          <h1 className="orange-text">{orangeText}</h1>
          <CommonButton buttonText={buttonText}/>
      </div>
      <img src={imgSrc} alt="icon" />
    </StyledBlackbox>
  );
};
