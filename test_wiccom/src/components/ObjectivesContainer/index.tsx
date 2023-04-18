import { BlackBoxContainer } from "../BlackBoxContainer";
import { ObjectivesImgContainer } from "../ObjectivesImgContainer";
import { StyledObjectivesContainer } from "./styles";

export const ObjectivesContainer = () => {
  return (
    <StyledObjectivesContainer>
      <h1>Objetivos</h1>
      <div className="img-container">
        <ObjectivesImgContainer
          descriptiveText="Ganho de massa"
          imgSrc="\static\images\model1.png"
        />
        <ObjectivesImgContainer
          descriptiveText="Energia"
          imgSrc="\static\images\model2.png"
        />
        <ObjectivesImgContainer
          descriptiveText="Recuperação muscular"
          imgSrc="\static\images\model3.png"
        />
        <ObjectivesImgContainer
          descriptiveText="Emagrecimento"
          imgSrc="\static\images\model4.png"
        />
      </div>
      <BlackBoxContainer />
      <div className="about">
        <img src="\static\images\skullVector.png" alt="logo" />
        <h1>Sobre a Blackskull</h1>
        <p>
          A Black Skull USA é uma marca de suplementos alimentares com foco em
          atletas de alta performance. Nossa sede no Brasil está alocada em Embu
          das Artes – SP, com mais de 12.000 m² de área construída, com alta
          capacidade produtiva. Nossos produtos trabalham com as melhores
          matérias-primas do mercado e tem como principal característica maior
          concentração de insumos, que proporcionam níveis de pureza mais altos
          e por consequência otimizam a qualidade de nossos produtos.
        </p>
      </div>
    </StyledObjectivesContainer>
  );
};
