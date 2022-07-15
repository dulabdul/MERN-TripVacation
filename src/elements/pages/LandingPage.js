import React from "react";
import Header from "elements/parts/Header";
import landingPage from "json/landingPage.json";
import Hero from "elements/parts/Hero";
import MostPicked from "elements/parts/MostPicked";
import Categories from "elements/parts/Categories";
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    console.log(this.props);
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
      </>
    );
  }
}

export default LandingPage;
