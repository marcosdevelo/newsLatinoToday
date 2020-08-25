import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, CardDeck } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DeportesOne = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			{store.deportes1.map((item, index) => {
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
						{/* <span className="homespam">COMUNIDAD</span> */}
						<br />
						<br />

						<div className="row row1 spacewithmain">
							<div className="col-sm-4">
								{store.deportes1.map((item, index) => {
									return (
										<Card key={index}>
											{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
											<img
												src={item.image2}
												height="613"
												width="100%"
												className="img-fluid height-auto max-width-100%"
												alt="..."
											/>
											<CardBody>
												<span className="secondeparttextspam">
													<strong>
														{" "}
														{/* {item.title} */}
														<br />
													</strong>
												</span>
											</CardBody>
										</Card>
									);
								})}
							</div>
							<div className="col-sm-4">
								{store.deportes1.map((item, index) => {
									return (
										<Card key={index}>
											{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
											<img
												src={item.image3}
												height="613"
												width="100%"
												className="img-fluid height-auto max-width-100%"
												alt="..."
											/>
											<CardBody>
												<span className="secondeparttextspam">
													<strong>
														{" "}
														{/* {item.title} */}
														<br />
													</strong>
												</span>
											</CardBody>
										</Card>
									);
								})}
							</div>

							<div className="col-sm-4">
								{store.deportes1.map((item, index) => {
									return (
										<Card key={index}>
											{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
											<img
												src={item.image4}
												height="300"
												className="img-fluid height-auto max-width-100%"
												alt="..."
											/>
											<CardBody>
												<span className="secondeparttextspam">
													<strong>
														{" "}
														{/* {item.title} */}
														<br />
													</strong>
												</span>
											</CardBody>
										</Card>
									);
								})}
							</div>
						</div>
						<div className="row row1">
							<div className="col-sm-4">
								{store.deportes1.map((item, index) => {
									return (
										<Card key={index}>
											{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
											<img
												src={item.image5}
												height="300"
												className="img-fluid height-auto max-width-100%"
												alt="..."
											/>
											<CardBody>
												<span className="secondeparttextspam">
													<strong>
														{" "}
														{/* {item.title} */}
														<br />
													</strong>
												</span>
											</CardBody>
										</Card>
									);
								})}
							</div>
							<div className="col-sm-4">
								{store.deportes1.map((item, index) => {
									return (
										<Card key={index}>
											{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
											<img
												src={item.image6}
												height="300"
												className="img-fluid height-auto max-width-100%"
												alt="..."
											/>
											<CardBody>
												<span className="secondeparttextspam">
													<strong>
														{" "}
														{/* {item.title} */}
														<br />
													</strong>
												</span>
											</CardBody>
										</Card>
									);
								})}
							</div>
							<div className="col-sm-4">
								{store.deportes1.map((item, index) => {
									return (
										<Card key={index}>
											{/* <div className="comunidadFotos1" style={{ height: "300px" }} /> */}
											<img
												src={item.image7}
												height="300"
												className="img-fluid height-auto max-width-100%"
												alt="..."
											/>
											<CardBody>
												<span className="secondeparttextspam">
													<strong>
														{" "}
														{/* {item.title} */}
														<br />
													</strong>
												</span>
											</CardBody>
										</Card>
									);
								})}
							</div>
						</div>
						<br />
						<br />
						<div className="espacio3" />
						<p className="parrafo">
							El pasado domingo 23 de agosto en los campos de béisbol de la liga hispana en la ciudad de
							Seven Spring, NC. se celebró la final de béisbol entre los equipos de Depo. Agua Dulce y
							Depo. Combinados del Norte. Depo. Agua Dulce se coronó campeón del torneo de 1era.
							Felicitaciones a los campeones!.
							<br />
							<br />
							Esa misma tarde, en los mismos campos de béisbol, la Organización{" "}
							{"‘Comunidad Vida Nueva NC ’"}
							junto al medio comunitario News Latino Today hizo un evento con las familias presentes, de
							concientización y registración de votantes ciudadanos mayores de 18 {"años"}. Bajo el lema
							de campaña {'"Tu voto es tu voz"'}. El título de la nota hace honor a la visón de News
							Latino Today como medio comprometido con la comunidad latina en Carolina del Norte y la
							promoción del deporte amateur con las familias hispanas.
							<br />
							<br />
							*Si tienes comentarios puedes escribirnos
							{" a:"} newslatinotodaync@gmail.com
							<br />
							<br />
							Síguenos en Instagram y Facebook @newslatinotoday
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
