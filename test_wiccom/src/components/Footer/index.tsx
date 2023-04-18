import { StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div className="social-media">
          <img
            src="\static\images\headerLogo.png"
            style={{
              width: "213px",
              height: "40px",
              display: "inline-block",
            }}
          />
          <p>Nos siga:</p>
          <img src="\static\images\socialMedia.png" alt="" />
        </div>
        <div className="blackskull-usa blackskull-p">
          <h1>Blackskull usa</h1>
          <p>Sobre Nós</p>
          <p>Black Skull é confiável?</p>
          <p>Atletas Black Skull</p>
          <p>Nosso Blog</p>
          <p>Seja um Revendedor</p>
          <p>Entre em Contato</p>
        </div>
        <div className="blackskull-p">
          <h1>Institucional</h1>
          <p>Trocas e Devoluções</p>
          <p>Política de Entregas</p>
          <p>Política de Privacidade</p>
          <p>Política de Cancelamentos</p>
          <h1 style={{ marginTop: "100px" }}>Formas de pagamento</h1>
          <img src="\static\images\paymentmethods.png" alt="" />
        </div>
        <div className="blackskull-p">
          <h1>Afiliados</h1>
          <p>Programa de Afiliados</p>
          <p>Desconto para Militares</p>
          <p>Benefícios para Profissionais de Saúde</p>
          <p>Benefícios para Profs. de Educação Física</p>
          <p>Assinaturas</p>

          <h1 style={{ marginTop: "35px" }}>Segurança</h1>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <img
              style={{ width: "80px", height: "48px" }}
              src="public\static\images\security2.png"
              alt=""
            />
            <img
              style={{ width: "38px", height: "52px" }}
              src="public\static\images\security1.png"
              alt=""
            />
          </div>
        </div>

        <div className="subscribe-email">
          <h1>fique por</h1>
          <h1 className="orange-text">dentro</h1>
          <p>
            Inscreva-se e seja o primeiro a saber sobre as novidades, promoções
            e muito mais!
          </p>
          <div>
            <input
              placeholder="Digite seu nome"
              className="black-input"
              type="text"
            />
            <input
              placeholder="Digite seu e-mail"
              className="black-input"
              type="text"
            />
          </div>
        </div>
      </StyledFooter>
    </>
  );
};
