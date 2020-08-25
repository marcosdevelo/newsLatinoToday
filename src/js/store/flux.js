const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			deportes1: [
				{
					date: "Marzo 23,2020",
					image: "https://i.postimg.cc/QxrxLL3Q/image6.jpg",
					type: "DEPORTES",
					title: "El deporte como medio de transformación social",
					image2: "https://i.postimg.cc/pdj6MSxj/image1.jpg",
					image3: "https://i.postimg.cc/CKbmQfHH/image3.jpg",
					image4: "https://i.postimg.cc/QxrxLL3Q/image6.jpg",
					image5: "https://i.postimg.cc/3rk9s6Bx/image7.jpg",
					image6: "https://i.postimg.cc/FKXx3H5f/image4.jpg",
					image7: "https://i.postimg.cc/CxkGhpBw/image8.jpg"
				}
			],
			deportes2: [
				{
					date: "Marzo 20, 2020",
					image:
						"https://vrl-eu-cdn.wetransfer.net/ivise/eyJwaXBlbGluZSI6W1sic3JnYiIse31dLFsiYXV0b19vcmllbnQiLHt9XSxbImdlb20iLHsiZ2VvbWV0cnlfc3RyaW5nIjoiMjA0OHgyMDQ4In1dLFsiZm9yY2VfanBnX291dCIseyJxdWFsaXR5Ijo4NX1dLFsic2hhcnBlbiIseyJyYWRpdXMiOjAuNzUsInNpZ21hIjowLjV9XV0sInNyY191cmwiOiJzMzovL3dldHJhbnNmZXItZXUtcHJvZC1zcGFjZXNoaXAvc25vcmptMjNtMDFwbHZzZTAyMDIwMDEzMTE2NDEyOC9zdGloNzR2bm4zdnUwNjM0YjIwMjAwMTMxMTY0MTI4In0/d80402b017c2fc89272f8c6573f9335ec3d616ecd6e870e06b911f7a00de49f3",
					type: "DEPORTES",
					title: "Liga Hispana de Zebulon",
					image2: "",
					image3: "",
					image4: "",
					image5: "",
					image6: "",
					image7: ""
				}
			],
			deportes3: [
				{
					description:
						"En el inicio de la fase pública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y Euroasiáticos.",
					date: "Nov. 13, 2019",
					type: "DEPORTES",
					title: "Tenoch Soccer League",
					image: "https://i.postimg.cc/25f75yST/futbol.jpg",
					image2:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/88004731_226442865190024_7356238380486623232_n.jpg?_nc_cat=108&_nc_oc=AQnvBg9nRUyDYcg22drKEc8e6IpVjV8IFJ_n47UgXG6lgTap_GhfwJECh5aMDO03qzyJggvCylY8CAEteftul8LL&_nc_ht=scontent.fmia1-1.fna&oh=b577bf6936c7f5db4e61b53ccd3b0ac7&oe=5F030C6E",
					image3:
						"https://scontent.fmia1-2.fna.fbcdn.net/v/t1.15752-9/87392303_556785374927551_6277322207521669120_n.jpg?_nc_cat=110&_nc_oc=AQmUL79zmo2-3wQwJkiqAUTJExVW_uoc537lXOk8HF1Kw9gmylvsdZQ3UHqTQvICO6PZSBv3LZNN31ZYATShStux&_nc_ht=scontent.fmia1-2.fna&oh=4ff670d7bfdcf1cebd6e5c4a99ea3fa3&oe=5EF753CC",
					image4:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/87365319_631993397602198_2654835434458185728_n.jpg?_nc_cat=106&_nc_oc=AQl5gQCw1pTCbooMld5bhsor_iJE_nl5JDPfVwsOLlRwDlcB8UEKu0NFL-cjXcqh6_wxDmAjgEqN3fvhU8CWYbLl&_nc_ht=scontent.fmia1-1.fna&oh=02ae446bc12994d5713adff68b8418f7&oe=5EFCE1ED",
					image5:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/87365308_268401044130503_1447391342958215168_n.jpg?_nc_cat=106&_nc_oc=AQnTymd3_RUq-8qieqSeB9CT5x-MlFtQxeaebNjEKdfpGUvDnqQKtwpjRYuWvfOzT7t58-O9JYCBoBNtqvT1tPyE&_nc_ht=scontent.fmia1-1.fna&oh=5b8213d4c6694aa604cfed370ed7a521&oe=5EF8CF36",
					image6:
						"https://scontent.fmia1-1.fna.fbcdn.net/v/t1.15752-9/87949035_601678734020512_6511704714667622400_n.jpg?_nc_cat=108&_nc_oc=AQm08tTZ6BXxlpvrVCEIJIwPrXmxoUuaSxWsf6uNDE1T9nUB0GKHjnDWQ2B4apS6VPKQ0-HAUr8QAXP48pEQSYz9&_nc_ht=scontent.fmia1-1.fna&oh=9d856eeedbba454e65a2fe22162ceb8a&oe=5EC2AA4F",
					image7:
						"https://scontent.fmia1-2.fna.fbcdn.net/v/t1.15752-9/87328280_499680977391611_5835075442301730816_n.jpg?_nc_cat=104&_nc_oc=AQnJL2OkMpPPTayXzhketvHth13oOvDHtzPOhqwLNuJqfO3uK-kQmyqbJji9QVYz7RhSVfWfVtcRKYW_wNyBulzC&_nc_ht=scontent.fmia1-2.fna&oh=68fed8fb477c052554b137048d16b273&oe=5EFD9962"
				}
			],
			noticias1: [
				{
					date: "Abril 25,2020",

					image: "https://i.postimg.cc/9XZvfRbw/news-Flyerupdate.jpg",
					type: "NOTICIAS",

					title: "Tu voto es tu voz, regístrate para votar!"
				}
			],
			noticias2: [
				{
					description: "Dígale a la FCC: detengan la propagación de información errónea sobre el coronavirus",
					date: "Marzo 23,2020",
					image: "https://d3nw1if3cd9gaw.cloudfront.net/images/pet-fox-news-misinfo-covid-200319.jpg",
					type: "NOTICIAS",
					title: "Coronavirus: Stop FakeNews!"
				}
			],
			noticias3: [
				{
					description:
						"ública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y Euroasiáticos.",
					date: "Nov. 13, 2019",
					image:
						"https://indyweek.com/downloads/79247/download/MCA_9372.jpg?cb=9ade37b24766e49ba4f31664cbdfef8e&w=1024&h=",
					type: "NOTICIAS",
					title: "La orden de aislamiento preventivo llega al Condado de Wake,NC"
				}
			],
			comunidad1: [
				{
					description: "",
					date: "Abril 28, 2020",
					image:
						"https://image.freepik.com/vector-gratis/grupo-personas-discute-noticias-redes-sociales_106299-61.jpg",
					type: "COMUNIDAD",
					title: "Ser Bilingue es un super poder!"
				}
			],
			comunidad2: [
				{
					description:
						"En el inicio de la fase pública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y Euroasiáticos.",
					date: "Marzo 7, 2020",
					image: "https://i.postimg.cc/3RSW4fY9/sandra1.jpg",
					type: "COMUNIDAD",
					title: "Comunidad Vida Nueva: Mi prójimo es cualquiera que tenga necesidad",
					image2: "https://i.postimg.cc/cCvCQ7JW/sandra2.jpg",
					image3: "https://i.postimg.cc/90sM1447/sandra3.jpg",
					image4: "https://i.postimg.cc/c1zrdzDL/sandra4.jpg",
					image5: "https://i.postimg.cc/pXnyrB7Y/sandra5.jpg",
					image6: "https://i.postimg.cc/dV21mVJh/sandra7.jpg",
					image7: "https://i.postimg.cc/Pqdq6nq2/sandra9.jpg"
				}
			],
			comunidad3: [
				{
					description:
						"En el inicio de la fase pública de la investigación para el impeachment de Trump en el Congreso comparecieron dos veteranos diplomáticos: William Taylor, actualmente encargado de negocios en Ucrania, y George Kent, subsecretario adjunto de Asuntos Europeos y Euroasiáticos.",
					date: "Marzo 5, 2020",
					image: "https://pbs.twimg.com/profile_images/1004892567820029952/QcYIydY3.jpg",
					type: "COMUNIDAD",
					title: "Campaña “Todos somos Familia”."
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
