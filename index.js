const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


//EJERCICIOS RESULETOS
//a) Las pizzas que tengan un id impar.

  pizzas.forEach(pizza =>{
    if(pizza.id % 2 === 0){
      }else{
        console.log(`${pizza.nombre}: id impar`)
      }
    })

//b) Responder: ¿Hay alguna pizza que valga menos de $600?

pizzas.forEach(pizza =>{
  if(pizza.precio < 600){
    console.log(`Seria la ${pizza.nombre} y vale ${pizza.precio}`)
  }
})

//c) El nombre de cada pizza con su respectivo precio.

pizzas.forEach(pizza =>{
  console.log(`${pizza.nombre} con el precio de ${pizza.precio}`)
})

//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

pizzas.forEach(pizza => {
  console.log(`Ingredientes de la ${pizza.nombre}:`) //primero entramos en el objeto pizzas

  pizza.ingredientes.forEach(ingrediente => {     //luego hacemos otro for each para iterar sobre el array de ingredientes
    console.log(`- ${ingrediente}`);
  })
});