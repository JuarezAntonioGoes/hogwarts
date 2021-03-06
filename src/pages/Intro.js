import React from "react";
import Header from "../components/Header";
import Houses from "../components/Houses";
import Loading from "../components/Loading";
import Students from "../components/Students";

const Intro = () => {
  const [showLoading, setShowLoading] = React.useState(true);

  return (
    <>
      <Header />
      <Houses />
      <Students setShowLoading={setShowLoading} />
      {showLoading && <Loading />}
    </>
  );
};

export default Intro;
