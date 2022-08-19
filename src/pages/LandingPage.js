import React from 'react';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Header from 'parts/Header';
import { connect } from 'react-redux';
import Testimoni from 'parts/Testimoni';
import Footer from 'parts/Footer';
import { fetchPage } from 'store/actions/page';
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  componentDidMount() {
    window.title = 'TripVacation | Home';
    window.scrollTo(0, 0);

    if (!this.props.landingPage)
      this.props.fetchPage(`/landing-page`, 'landingPage');
  }

  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty('landingPage')) return null;
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={page.landingPage.mostPicked}
        />
        <Categories data={page.landingPage.category} />
        <Testimoni data={page.landingPage.testimonial} />
        <Footer></Footer>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  page: state.page,
});
export default connect(mapStateToProps, { fetchPage })(LandingPage);
