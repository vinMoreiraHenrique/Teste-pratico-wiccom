import React from "react";

import { StyledHeader, StyledNavBar } from "./styles";
import { SearchInput } from "../SearchInput";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";

import { HeaderCallTous } from "../HeaderCallToUs";

export const Header = () => {
  return (
    <>
      <HeaderCallTous />
      <StyledHeader>
        <img
          src="src\assets\headerIcons\headerLogo.png"
          style={{ width: "166px", height: "32px", display: "inline-block" }}
        />
        <StyledNavBar>
          <ul>
            <li>
              <a href="#">Categorias</a>
            </li>
            <li>
              <a href="#">Vestuários</a>
            </li>
            <li>
              <a href="#">Objetivos</a>
            </li>
            <li>
              <a href="#">Promoções</a>
            </li>
            <li>
              <a href="#">Atletas</a>
            </li>
            <li>
              <a href="#">Assinatura</a>
            </li>
          </ul>
        </StyledNavBar>
        <SearchInput />
        <BiUserCircle style={{ width: "24px", height: "24px" }} />
        <AiOutlineStar style={{ width: "24px", height: "24px" }} />
        <BsCart3 style={{ width: "24px", height: "24px" }} />
      </StyledHeader>
    </>
  );
};
