//jshint esversion:6
const WritingRoutes = [
	{ path: "/pizza", name: "Pizzas", Component: Pizza },
	{ path: "/pizza/:pizzaId", name: "Edit Pizza", Component: EditPizza },
	{
		path: "/pizza/:pizzaId/toppings",
		name: "Pizza Toppings",
		Component: Toppings
	}
	
	{ 
		name: "Characters",
		path: "character",
		fa: 'fa-solid fa-person-dress',
		Component: 
	},{ 
					name: "Organizations",
					link: "organization",
					fa: 'fa-solid fa-people-group',
				},{ 
					name: "Religions",
					link: "religion",
					fa: 'fa-solid fa-place-of-worship',
				},{ 
					name: "Cultures",
					link: "culture",
					fa: 'fa-solid fa-people-line',
				},{ 
					name: "Objects",
					link: "object",
					fa: 'fa-solid fa-shapes',
				},
];

export default WritingRoutes;