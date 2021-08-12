import React from "react";
import Layout from "./Layout";
import Hero from "./Hero/Hero";
import MainSection from "./Main/MainSection";
import FeaturedConnection from "./Featured-Connection/FeaturedConnection";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedConnection />
      </Layout>
    </>
  );
};

export default HomePage;
