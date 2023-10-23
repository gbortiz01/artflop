const products = [
  {
    id: 1,
    title: 'Yerbera y Azucarera',
    name: 'Mates',
    category: 'mates',
    description: 'Descripción del Mate intervenido.',
    precio: 1000.99,
    stock: 5,
    img: 'https://i.postimg.cc/T3Y7P7zC/Yerbera-Azucarera01.jpg'
  },
  {
    id: 2,
    title: 'Mate Personalizado',
    name: 'Mates',
    category: 'mates',
    description: 'Descripción del Mate Personalizado.',
    precio: 1500.99,
    stock: 3,
    img: 'https://i.postimg.cc/pdVHRJCH/Mate-Retrato02.jpg'
  },
  {
    id: 3,
    title: 'Llaveros',
    name: 'Llaveros',
    category: 'llaveros' ,
    description: 'Este encantador llavero es una obra de arte en miniatura que celebra el amor por tus queridas mascotas.',
    precio: 999.99,
    stock: 15,
    img: 'https://i.postimg.cc/4yykVfMF/llavero01.jpg'
  },
  {
    id: 4,
    title: 'Mate Retrato Mascota',
    name: 'Mates',
    category: 'mates' ,
    description: 'Descripción del Mate Retrato Mascota.',
    precio: 2500.99,
    stock: 8,
    img: 'https://i.postimg.cc/KYfHfXnX/Mate-Retrato01.jpg'
  },
  {
    id: 5,

    title: 'Cuadros',
    name: 'Cuadros',
    category: 'cuadros' ,
    description: 'Este cuadro es una obra de arte única que combina la maestría artística con la pasión por capturar la belleza y la personalidad de un individuo en un lienzo. Cada detalle está cuidadosamente elaborado a mano por un talentoso artista, lo que resulta en una pieza de arte que perdurará a lo largo del tiempo.',
    precio: 3900.99,
    stock: 5,
    img: 'https://i.postimg.cc/FzVddxMx/cuadro01.jpg'
  }
];

      
export const ListProduct = () => {
  return new Promise((resolve, reject) => {
      let error = false;
      setTimeout(() => {
          if (error) {
              reject('NO HAY PRODUCTOS');
          } else {
              resolve(products);
          }
      }, 2000);
  });
};

export const getItem = (id) => {
  return new Promise ((resolve) => {
    setTimeout (()=>{
      resolve(products.find((item) => item.id === id ))
    },2000)
  }
  )
}