import React from "react";

import HomeSec from "../../components/mainSection/mainSection";

const Main = (props) => {
  const Data = props.match;
  const { params } = props.match;

  return <HomeSec data={Data} user={params}></HomeSec>;
};

export default Main;
