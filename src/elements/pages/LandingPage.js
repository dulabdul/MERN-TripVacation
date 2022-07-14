import React from "react";
import Header from "elements/parts/Header";
import landingPage from "json/landingPage.json";
import Hero from "elements/parts/Hero";
import MostPicked from "elements/parts/MostPicked";
class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={landingPage.hero} />
        <MostPicked data={landingPage.mostPicked} />
      </>
    );
  }
}

export default LandingPage;
