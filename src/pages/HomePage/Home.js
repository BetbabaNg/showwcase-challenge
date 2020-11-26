import React from "react";
import HomeSec from "../../components/homeSection/homeSection";
import { homeObjOne } from "../HomePage/Data";

const Home = () => {
  return <HomeSec {...homeObjOne}></HomeSec>;
};

export default Home;
