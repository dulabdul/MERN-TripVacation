import React, { useEffect, useRef, useState } from 'react';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Header from 'parts/Header';
import Testimoni from 'parts/Testimoni';
import Footer from 'parts/Footer';
import { fetchPage } from 'store/actions/page';
import axios from 'configs/axios';
import { setDate } from 'date-fns';
import { useAxios } from 'use-axios-client';
export default function LandingPage(props) {
  const [heroData, setHeroData] = useState(null);
  const refShowMostPicked = useRef();

  useEffect(() => {
    document.title = 'TripVacation | Home';
    window.scrollTo(0, 0);
  }, [props]);

  return (
    <>
      <Header isCentered={false} />
      <Hero mostPickedRef={refShowMostPicked} />
      <MostPicked mostPickedRef={refShowMostPicked} />
      <Categories />
      <Testimoni />
      <Footer />
    </>
  );
}

// import React from 'react';
// import Hero from 'parts/Hero';
// import MostPicked from 'parts/MostPicked';
// import Categories from 'parts/Categories';
// import Header from 'parts/Header';
// import { connect } from 'react-redux';
// import Testimoni from 'parts/Testimoni';
// import Footer from 'parts/Footer';
// import { fetchPage } from 'store/actions/page';
// class LandingPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.refMostPicked = React.createRef();
//   }
//   componentDidMount() {
//     document.title = 'TripVacation | Home';
//     window.scrollTo(0, 0);

//     if (!this.props.hero) this.props.fetchPage(`/hero`, 'hero');
//     if (this.props.mostPicked)
//       this.props.fetchPage(`/most-picked`, 'mostPicked');
//     if (this.props.categoryPage)
//       this.props.fetchPage(`/category-page`, 'categoryPage');
//     if (this.props.testimonialPage)
//       this.props.fetchPage(`/testimonial-page`, 'testimonialPage');
//   }

//   render() {
//     const { page } = this.props;
//     if (!page.hasOwnProperty('hero')) return null;
//     if (!page.hasOwnProperty('mostPicked')) return null;
//     if (!page.hasOwnProperty('categoryPage')) return null;
//     if (!page.hasOwnProperty('testimonialPage')) return null;
//     return (
//       <>
//         <Header {...this.props}></Header>
//         <Hero
//           refMostPicked={this.refMostPicked}
//           data={page.hero}
//         />
//         <MostPicked
//           refMostPicked={this.refMostPicked}
//           data={page.mostPicked}
//         />
//         <Categories data={page.category} />
//         <Testimoni data={page.testimonial} />
//         <Footer></Footer>
//       </>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   page: state.page,
// });
// export default connect(mapStateToProps, { fetchPage })(LandingPage);
