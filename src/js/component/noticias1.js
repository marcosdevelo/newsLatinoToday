import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const NoticiasOne = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			{store.noticias1.map((item, index) => {
				return (
					<div key={index} className="container">
						<div className="espacio2" />
						<div>
							<span className="titulo">
								<strong>
									{item.title}
									{/* Ibrahimovic se despidió de Los Ángeles Galaxy y los mandó {"a ver béisbol"} */}
									<br />
								</strong>
							</span>
						</div>
						<div className="espacio3" />

						<img
							src={item.image}
							height="613"
							width="100%"
							className="img-fluid height-auto max-width-100%"
							alt="..."
						/>

						{/* <div
				className="deportes1"
				style={{
					height: "613px"
					// width: "813px"
				}}
			/> */}
						<br />
						<br />
						<div className="espacio3" />
						<p className="parrafo">
							SILER CITY, N.C. — In Siler City, where poultry trucks scatter feathers on the roads, Janet
							Pulido knocked on doors in a heavily Latino mobile home park on a recent autumn weekend,
							hoping to get out the vote. At Interfood Plaza Latina in Raleigh, Sarahi Gonzalez held a
							sign in Spanish that read,
							{" “Register to vote here. Citizen? Over 18?”"} The first person the 18-year-old registered
							to vote that evening? Herself.
							<br />
							<br />
							Across town, during halftime on a patchy grass soccer field — with the Honduran and
							Salvadoran teams tied — Sandra Amado Gómez and her daughter rushed to register young
							spectators. They signed up four. In this presidential battleground, as in much of the South,
							politics are typically viewed through a prism of Black and white.
							<br />
							<br />
							But Latinos have become an increasingly important constituency in North Carolina, which, in
							the last three elections, has been one of the most closely fought states in the country.
							Polls suggest the race for the White House is once more a toss-up. Although Latinos account
							for only 4% of registered voters in North Carolina, they are a force that could tip the 2020
							contest.
							<br />
							<br />
							<a href="https://www.latimes.com/politics/story/2020-10-12/latino-vote-north-carolina-presidential-battleground">
								Click here To see the full article!
							</a>
							<br />
						</p>
						<div className="espacio2" />
						<Link to="/">
							<span className="volver">Volver A La Pagina Principal</span>
						</Link>
					</div>
				);
			})}
		</React.Fragment>
	);
};
