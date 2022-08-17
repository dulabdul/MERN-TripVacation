import React from 'react';
import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import { connect } from 'react-redux';
import Footer from 'parts/Footer';
import Fade from 'react-reveal/Fade';
import ItemDetails from 'json/itemDetails.json';
import FeaturedImageDetails from 'parts/FeaturedImageDetails';
import PagesDetailDescription from 'parts/PagesDetailDescription';
import BookingForm from 'parts/BookingForm';
import Categories from 'parts/Categories';
import Testimoni from 'parts/Testimoni';
import { checkoutBooking } from 'store/actions/checkout';
class DetailsPage extends React.Component {
  componentDidMount() {
    window.title = 'Details Page';
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailTitle>
        <FeaturedImageDetails
          data={ItemDetails.imageUrls}
        ></FeaturedImageDetails>
        <section className='container'>
          <div className='row'>
            <div className='col-7 pr-5'>
              <Fade bottom>
                <PagesDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className='col-5'>
              <Fade bottom>
                <BookingForm
                  itemDetails={ItemDetails}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories}></Categories>
        <Testimoni data={ItemDetails.testimonial}></Testimoni>
        <Footer />
      </>
    );
  }
}

export default connect(null, { checkoutBooking })(DetailsPage);
