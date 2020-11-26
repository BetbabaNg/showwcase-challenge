import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.div`
  background-color: #060b26;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const MenuBar = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
`;

export const Nav = styled.nav`
  background-color: #060b26;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ active }) => (active ? "-100%" : 0)};
  transition: ${({ active }) => (active ? "850ms" : "350ms")};
  z-index: 1;
  @media screen and (max-width: 960px) {
    display: ${({ click }) => (click ? "none" : "block")};
  }
`;
export const NavMenuItems = styled.ul`
  width: 100%;
`;

export const NavBarToggle = styled.li`
  background-color: #060b26;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const MenuBars = styled(Link)`
  display: flex;
  color: #fff;
  text-decoration: none;
  margin-left: 2rem;
  font-size: 2rem;
  font-family: "Josefin Sans", sans-serif;
  background: none;
`;

export const NavText = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
`;
export const NavLinkItem = styled(Link)`
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;

  &:hover {
    background-color: #1a83ff;
  }
`;

export const SpanElement = styled.span`
  margin-left: 16px;
`;

export const UserContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  min-height: 90vh;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

export const UserIntroduction = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 120px;
  margin-bottom: 24px;
  padding: 24px;
  color: #101522;
  position: absolute;
  top: 90px;

  @media screen and (max-width: 960px) {
    margin-left: 4px;
  }
`;
export const UserSubHeading = styled.p`
  font-family: "Trebuchet Ms", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const UserEducationContent = styled.div`
  background: #060b26;
  width: 80%;
  min-height: 90vh;
  color: #fff;
  border-radius: 4px;
  margin-top: 20px;
  margin-left: 60px;
  padding: 0 20px;
  border: 3px solid #4b59f7;
  @media screen and (max-width: 960px) {
    width: 100%;
    margin-left: 1px;
  }
`;

export const UserEducationWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  } ;
`;

export const UserTitle = styled.h2`
  margin-top: 4px;
  margin-bottom: 5px;
  font-size: 1.8rem;
`;

export const UserSubTitle = styled.h4`
  margin-top: 4px;
  margin-bottom: 5px;
  font-size: 1.2rem;
`;

export const UserEducationItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  box-sizing: border-box;
  color: #fff;
  list-style: none;
  font-size: 1.2rem;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const UserNoProfile = styled.div`
  position: relative;
  display: flex;
  background: #060b26;
  width: 55%;
  margin: auto;
  min-height: 75vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UserProfileInfo = styled.p`
  position: absolute;
  top: 30%;
  text-align: center;
  color: #4b59f7;
  font-size: 2rem;
  padding: 1rem 0;
  @media screen and (max-width: 960px) {
    top: 20%;
    font-size: 1.5rem;
  }
`;
export const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 35%;
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 150px;

  @media screen and (max-width: 960px) {
    top: 60%;
    left: 4%;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#101522" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  margin-top: 20px;
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#4b59f7" : "#101522")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
