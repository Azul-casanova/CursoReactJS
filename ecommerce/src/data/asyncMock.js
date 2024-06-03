/*ARRAY DE PRODUCTOS */

const productos = 
    [
        {
          id: 1,
          nombre: "Puffer New",
          stock: 10,
          descripcion: "Camiseta Campera puffer matelaseada en microtafetas italianas. Sus mangas amplias de sisa caída con cierre desmontable permiten convertirla en un moderno chaleco. Tiene cartera delantera con cierre y snaps de metal black, cuello alto y bolsillos ojal en laterales. De calce suelto y largo hasta la primera cadera.",
          categoria: "abrigo",
          img: 'https://naum-oficial.com/wp-content/uploads/2024/02/Puffer-Karina-azul_11-30ATW509.webp',
          precio: '280000'
        },
        {
          id: 2,
          nombre: "Abrigo Angie",
          stock: 10,
          descripcion: "Campera súper urbana confeccionada en cuatro telas de diferentes texturas que se convertirá en el key item de tus looks de invierno. Tiene manga ranglan con matelaseado y sisa caída, ajuste en puño mediante snap metálico black, cartera con snaps metálicos black y bolsillos plaqué a ambos lados. Cuello de solapa levantada. Largo hasta la segunda cadera.",
          categoria: "abrigo",
          img: 'https://naum-oficial.com/wp-content/uploads/2024/03/30ATD792P7_1.jpg',
          precio: '520000'
        },
        {
          id: 3,
          nombre: "Chaleco Delfin",
          stock: 20,
          descripcion: "Chaleco matelaseado en microcord con efecto gastado de calce amplio y súper canchero, ideal para media estación. Tiene sisa caída y amplia, cartera delantera con cierre y snaps de metal black. Cuello alto y bolsillos ojal en laterales. Largo hasta la primera cadera.",
          categoria: "abrigo",
          img: 'https://naum-oficial.com/wp-content/uploads/2024/02/30ATD80920_1.jpg',
          precio: '300000'
        },
        {
          id: 4,
          nombre: "Remera Skin",
          stock: 40,
          descripcion: "Polera elastizada de silueta al cuerpo confeccionada en lurex de punto translúcido. Tiene cuello alto, manga larga pegada. Largo por la cadera. Una prenda ideal para armar un look de noche este invierno.Sudadera con capucha y bolsillo delantero",
          categoria: "remera",
          img: 'https://naum-oficial.com/wp-content/uploads/2024/04/30RYN73118_2-1000x1250.jpg',
          precio: '110000'
        },
        {
          id: 5,
          nombre: "Remera Leo",
          stock: 25,
          descripcion: "Remera básica confeccionada en jersey flama 100% algodón es un indispensable en todo placard. Tiene escote redondo a la base con detalle de triángulo bordado, manga larga pegada y largo por la cadera. verano con estampado floral",
          categoria: "remera",
          img: 'https://naum-oficial.com/wp-content/uploads/2024/02/30RID71018_1.jpg',
          precio: '67000'
        },
        {
          id: 6,
          nombre: "Remera Boy Becky",
          stock: 35,
          descripcion: "Remera básica de silueta recta confeccionada en morley. Tiene escote en V tejido que termina en una media cartera con broches metálicos níquel, manga larga pegada que termina en puño. Largo por la cadera.",
          categoria: "remera",
          img: 'https://naum-oficial.com/wp-content/uploads/2024/03/30RTD71610_1.jpg',
          precio: '120000'
        },
        {
          id: 7,
          nombre: "Jean Grey",
          stock: 15,
          descripcion: "Jean recto con la pierna amplia. Tiene un lavado gastado espectacular en tono gris vintage. Tiene cierre metálico níquel, botón Naum black y remaches black en los bolsillos laterales. En espalda, bolsillos plaqué. Tiro medio.",
          categoria: "pantalon",
          img: 'https://naum-oficial.com/wp-content/uploads/2024/03/30PIJ75718_1.jpg',
          precio: '100000'
        },
      ];

    export const getProducts = ()=> {
        return new Promise((resolve)=>{
            setTimeout(()=>{
            resolve(productos);}, 2000)
        })
    }

    export const getProductCategory = (category)=> {
      return new Promise ((resolve)=>{
        const productosFiltrados = productos.filter((prod)=>{
          return prod.categoria === category;
        })
        setTimeout(()=>{
          resolve(productosFiltrados);}, 1000)

      })
    }

    export const getProductId = (id)=> {
      return new Promise ((resolve)=>{
        const detailsProduct = productos.find((prod)=>{
          return prod.id === parseInt(id);
        })
        resolve(detailsProduct);

      })
    }