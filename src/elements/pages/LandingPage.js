import React from "react";
import Header from "elements/parts/Header";
class LandingPage extends React.Component {
	render() {
		return (
			<>
				<Header {...this.props}></Header>
			</>
		);
	}
}

export default LandingPage;
