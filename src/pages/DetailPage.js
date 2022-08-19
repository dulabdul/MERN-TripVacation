import React from 'react';
import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import { connect } from 'react-redux';
import Footer from 'parts/Footer';
import Fade from 'react-reveal/Fade';
import FeaturedImageDetails from 'parts/FeaturedImageDetails';
import PagesDetailDescription from 'parts/PagesDetailDescription';
import BookingForm from 'parts/BookingForm';
import Testimoni from 'parts/Testimoni';
import { checkoutBooking } from 'store/actions/checkout';
import { fetchPage } from 'store/actions/page';
import Activities from 'parts/Activities';
class DetailsPage extends React.Component {
  componentDidMount() {
    window.title = 'Details Page';
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `/detail-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
  }
  render() {
    const { page, match } = this.props;
    if (!page[match.params.id]) return null;
    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={page[match.params.id]}
        ></PageDetailTitle>
        <FeaturedImageDetails
          data={page[match.params.id].imageId}
        ></FeaturedImageDetails>
        <section className='container'>
          <div className='row'>
            <div className='col-7 pr-5'>
              <Fade bottom>
                <PagesDetailDescription data={page[match.params.id]} />
              </Fade>
            </div>
            <div className='col-5'>
              <Fade bottom>
                <BookingForm
                  itemDetails={page[match.params.id]}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>
        <Activities data={page[match.params.id].activityId}></Activities>
        <Testimoni data={page[match.params.id].testimonial}></Testimoni>
        <Footer />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  page: state.page,
});
export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
