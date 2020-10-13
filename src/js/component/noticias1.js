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
							SILER CITY, N.C. - En Siler City, donde los camiones de aves de corral esparcen plumas en
							las carreteras, Janet Pulido llamó a las puertas de un parque de casas móviles con un gran
							número de latinos en un reciente fin de semana de otoño, con la esperanza de obtener la
							votación. En Interfood Plaza Latina en Raleigh, Sarahi González sostuvo un cartel en español
							que decía: {"“Regístrese para votar aquí."} ¿Ciudadano? ¿Más de 18 años? ¿La primera persona
							que el joven de 18 años se registró para votar esa noche? Sí misma. Al otro lado de la
							ciudad, durante el medio tiempo en un campo de fútbol de césped irregular, con los equipos
							de Honduras y El Salvador empatados, Sandra Amado Gómez y su hija se apresuraron a registrar
							a los jóvenes espectadores. Firmaron cuatro. En este campo de batalla presidencial, como en
							gran parte del Sur, la política se ve típicamente a través de un prisma de blanco y negro.
							<br />
							<br />
							<a href="https://www.latimes.com/politics/story/2020-10-12/latino-vote-north-carolina-presidential-battleground">
								para ver nota oficial de LA Times haz click aqui!
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
