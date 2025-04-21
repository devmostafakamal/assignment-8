import React from "react";
import Banner from "../../components/Banner/Banner";
import DoctorsContainer from "../../components/DoctorsContainer";
import { useLoaderData } from "react-router";

function Home() {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Banner></Banner>
      <DoctorsContainer doctors={data}></DoctorsContainer>
    </div>
  );
}

export default Home;
