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
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}
class DetailsPage extends React.Component {
  componentDidMount() {
    window.title = 'Details Page';
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match?.params?.id])
      this.props.fetchPage(
        `/detail-page/${this.props?.router?.params?.id}`,
        this.props?.router?.params?.id
      );
  }
  render() {
    const { page, match } = this.props;
    console.log('props', this.props);
    console.log('page', page);
    console.log('router', this.props.router);
    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ];
    return (
      <>
        <Header />
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={page.params?.id}
        />
        <FeaturedImageDetails data={page.params?.id.imageId} />
        <section className='container'>
          <div className='row'>
            <div className='col-7 pr-5'>
              <Fade bottom>
                <PagesDetailDescription data={page.params?.id} />
              </Fade>
            </div>
            <div className='col-5'>
              <Fade bottom>
                <BookingForm
                  itemDetails={page.params?.id}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>
        <Activities data={page.params?.id}></Activities>
        {/* <Testimoni data={page[match.params.id].testimonial}></Testimoni>  */}
        <Footer />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  page: state.page,
});
export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  withRouter(DetailsPage)
);
