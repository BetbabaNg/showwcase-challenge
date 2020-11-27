import React from "react";
import {
  HomeContainer,
  HomeIntroduction,
  Img,
} from "../components/homeSection/homeSection.elements";
import notFoundImg from "../../src/images/undraw_page_not_found_su7k.svg";

function notFound() {
  return (
    <>
      <HomeContainer>
        <HomeIntroduction>
          <Img src={notFoundImg}></Img>
        </HomeIntroduction>
      </HomeContainer>
    </>
  );
}

export default notFound;
