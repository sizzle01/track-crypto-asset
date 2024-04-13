import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import NestedModal from "../components/Modal"

const Homepage = () => {
  return (
    <>
      <Banner />
      <CoinsTable />
     <NestedModal />
    </>
  );
};

export default Homepage;
