import React, { Component } from "react";
import mdg from "../../img/mdg.jpg";
export class Logo extends React.Component {
	render() {
		return (
			<div className="container float-right">
				<img
					src={mdg}
					height="150"
					width="200"
					className="img-fluid max-width-100% float-right pt-5"
					alt="..."
				/>
			</div>
		);
	}
}
