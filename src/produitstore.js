

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
    {
        id:"12",
        titre:"Deska TV LED Deska ",
        prix:84.97,
        image:"https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/986911/1.jpg?5708"

    },
    {
        id:"12",
        titre:"Astech Four Electrique ",
        prix:55.40,
        image:"https://sn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/61/743911/1.jpg?7108"

    },
    {
        id:"13",
        titre:"Generic Haut Parleur Bluetooth",
        prix:11.21,
        image:"https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/61589/1.jpg?4339"

    },
    {
        id:"14",
        titre:"Clé usb",
        prix:4.61,
        image:"https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/36019/1.jpg?0918"

    },
    {
        id:"15",
        titre:" Mini Souris Sans Fil ",
        prix:4.03,
        image:"https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/420121/1.jpg?3013"

    },
    {
        id:"16",
        titre:" Mini Ventilo",
        prix:12.02,
        image:"https://sn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/360301/1.jpg?8135"

    },
    {
        id:"17",
        titre:"Convertisseur Adaptateur",
        prix:5.93,
        image:"https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/19639/1.jpg?8491"

    },
    {
        id:"18",
        titre:"clavier sans fil +souris sans fil",
        prix:16.08,
        image:"https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/134121/1.jpg?0960"

    },
    {
        id:"19",
        titre:"ATC2i Câble Lan FTP Cat6 30m",
        prix:16.00,
        image:"https://sn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/89/98979/1.jpg?1613"

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