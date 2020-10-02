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
						<a href="https://www.facebook.com/groups/2808017706096886/?ref=share">
							<img
								src={item.image}
								height="613"
								width="100%"
								className="img-fluid height-auto max-width-100%"
								alt="..."
							/>
						</a>

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
							En junio de 2020, estimamos que hay 218,000 Latinxs en Carolina del Norte registrados para
							votar, pero hay otros 212,000 Latinxs de Carolina del Norte que son elegibles y no están
							registrados aún . Este dato es sorprendente porque estamos hablando de casi el doble de
							personas de origen Latinx que podría hacer una diferencia con su voto en el Estado y ser la
							voz de sus familiares y amigos. *El objetivo de esta campaña es generar conciencia sobre la
							importancia de registrarse para votar en las elecciones de Noviembre 2020 y expandir el
							registro de votantes entre la comunidad Latinx no registrada. La fecha límite para
							registrase para votar es Octubre 9. ¿Qué estás esperando para registrarte?.
							<br />
							<br />
							•REGISTRO de VOTANTES: •Existen dos maneras de registrarse para votar en Carolina del Norte.
							A saber, las personas elegibles, Ciudadanos americanos, mayores de 16 años pueden
							registrarse para votar. ( sólo los mayores de 18 años podrán votar en Noviembre). 1)
							llenando una solicitud en papel y presentándola ó enviándola a la Junta de Elecciones en
							persona o por correo. 2) Ó en el sitio web del DMV si tiene una identificación o licencia de
							conducir emitida por el DMV.
							<br />
							<br />
							•RECUERDA NO NECESITAS UNA IDENTIFICACIÓN PARA PODER VOTAR EN LAS ELECCIONES DE 2020. Si
							usted está debidamente inscrito para votar, no necesita una identiﬁcación con foto para
							votar en las elecciones del 2020. El requisito controversial sobre la identiﬁcación del
							votante fue bloqueado por un tribunal federal para todas las elecciones, mientras el caso se
							impugna en el tribunal. Consulte ncvoter.org para las últimas noticias sobre la ley
							(contenido en {"inglés"}
							). Orden: 1:18CV1034; Emitida: 12/31/19 * Síguenos en Facebook 👍🏼 {'"Tu'} voto es tu voz, NC
							regístrate para votar!. {'"Este'} @Grupo es organizado como un #servicio a la #comunidad
							latinx en N.C. por: Comunidad Vida Nueva NC
							<br />
							<br />
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
