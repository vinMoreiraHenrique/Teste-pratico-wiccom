import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  background-color: ${theme.colors.black1};
  height: 500px;
  padding-left: 56px;
  padding-top: 64px;
  gap: 40px;
  div {
    display: flex;
    flex-direction: column;
  }
  .blackskull-p {
    text-align: left;
    gap: 14px;
    p {
      font-family: ${theme.font.barlow};
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: ${theme.colors.gray1};
      :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    h1 {
      font-family: ${theme.font.barlow};
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;
      color: ${theme.colors.white};
    }
  }
  .subscribe-email {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 500px;
    border: 1px solid ${theme.colors.dark3};
    transform: translateY(-64px);
    padding: 0 15px;
    gap: 16px;
    div {
      gap: 16px;
      input {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 13px 16px;
        gap: 10px;
        background-color: ${theme.colors.dark1};
        border: 1px solid ${theme.colors.dark3};
        border-radius: 4px;
        width: 266px;
        height: 56px;
        &::placeholder {
          color: ${theme.colors.gray1};
        }
      }
    }
    h1 {
      font-family: ${theme.font.robotoCondensed};
      font-style: italic;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      text-align: center;
      text-transform: uppercase;
    }
    p {
      font-family: ${theme.font.barlow};
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: ${theme.colors.gray1};
      /* width: 260px;
      height: 34px; */
    }
    .white-text {
      color: ${theme.colors.white};
    }
    .orange-text {
      color: ${theme.colors.orange1};
    }
  }
  .blackskull-usa {
    gap: 14px;
  }
  .social-media {
    justify-content: space-between;
    text-align: center;
    height: 161px;
    p {
      font-family: ${theme.font.barlow};
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
    }
  }
  .horizontal-div {
    display: flex;
  }
`;
