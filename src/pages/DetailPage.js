import React from "react";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
// import Footer from "parts/Footer";
import ItemDetails from "json/itemDetails.json";
import FeaturedImageDetails from "parts/FeaturedImageDetails";
import PagesDetailDescription from "parts/PagesDetailDescription";
import BookingForm from "parts/BookingForm";
export default class DetailsPage extends React.Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
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
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PagesDetailDescription
                data={ItemDetails}
              ></PagesDetailDescription>
            </div>
            <div className="col">
              <BookingForm itemDetails={ItemDetails} />
            </div>
          </div>
        </section>

        {/* <Footer></Footer> */}
      </>
    );
  }
}
