import React from "react";
import Header from "elements/parts/Header";
import landingPage from "json/landingPage.json";
import Hero from "elements/parts/Hero";
class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={landingPage.hero} />
      </>
    );
  }
}

export default LandingPage;
