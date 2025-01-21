"use client";

import PublicAuth from "./lib/PublicAuth";
import HomeComponent from "./components/HomeComponent";

const Home = () => {
  return (
    <div>
      <HomeComponent />
    </div>
  );
};

export default PublicAuth(Home);
