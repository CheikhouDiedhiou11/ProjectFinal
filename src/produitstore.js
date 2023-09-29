

const produitsArray = [
    {
        id:"1",
        titre:"Iphone 14",
        prix:1977.99,
        image: "https://th.bing.com/th/id/OIP.Y10DWx68L7a_ute7VzUYdQAAAA?pid=ImgDet&rs=1"
        

    },
    {
        id:"2",
        titre:"Casquet Bluetooth",
        prix:6045,
        image:"https://th.bing.com/th/id/OIP.jgi_hsZ1gT7Np7f_RugDngHaHa?pid=ImgDet&rs=1"

    },
    {
        id:"3",
        titre:"Camera",
        prix:827.99,
        image:"https://th.bing.com/th/id/R.bd41d5e5867021a66f6e13c2039b9540?rik=AZA3MiqdgV%2fWDQ&pid=ImgRaw&r=0"

    },
    {
        id:"4",
        titre:"Mac book Pro",
        prix:1499.97,
        image:"https://m.media-amazon.com/images/I/61o62q+1GUL._AC_SY355_.jpg"

    },
    {
        id:"5",
        titre:"Micro cravate  ",
        prix:17.99,
        image:"https://m.media-amazon.com/images/I/61SqV0qrXHL.__AC_SX300_SY300_QL70_ML2_.jpg"

    },
    {
        id:"6",
        titre:"Téléviseur portable ",
        prix:119.40,
        image:"https://m.media-amazon.com/images/I/61gaOdCtjqL._AC_SY355_.jpg"

    },
    {
        id:"7",
        titre:"Xbox Series S ",
        prix:39.40,
        image:"https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_UL320_.jpg"

    },
    {
        id:"8",
        titre:"Mini congélateur ",
        prix:219.40,
        image:"https://m.media-amazon.com/images/I/51kYUbVh3FL._AC_SX679_.jpg"

    },
    {
        id:"9",
        titre:"Grille-pain  ",
        prix:19.80,
        image:"https://images-na.ssl-images-amazon.com/images/I/8159xjkhHOL._AC_UL200_SR200,200_.jpg"

    },
    {
        id:"10",
        titre:"Samsung Galaxy S21 ",
        prix:1149.00,
        image:"https://m.media-amazon.com/images/I/51fVzt0dDVL.__AC_SX300_SY300_QL70_ML2_.jpg"

    },
    {
        id:"11",
        titre:"Lamicall Support de téléphone ",
        prix:27.99,
        image:"https://m.media-amazon.com/images/I/61esivIcJgL._AC_UL320_.jpg"

    },
    {
        id:"11",
        titre:"Drone quadrirotor pliable  ",
        prix:127.99,
        image:"https://m.media-amazon.com/images/I/71SyL0acTqL._AC_UL320_.jpg"

    },


]

function getProduitData(id) {
    let produitData = produitsArray.find(produit => produit.id===id);

    if(produitData ==undefined) {
        console.log("Les données relatives au produit ne concernent pas l'identifiant : " + id);
        return undefined;
    }

    return produitData;
}


export {produitsArray, getProduitData};