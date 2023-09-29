//sk_test_51NviIhH0QgpgLmCCwZs2eIKdglQhZXIKIfMJEN9VJthfx9kWEQJ1xQ3mmvKjaSZBpJJwcxc9um1h4LcraivqBHLI00TJirqgke
// iphone 14 :price_1NvkpxH0QgpgLmCCQBcmMZLa
//Casquet Bluetooth : price_1Nvl23H0QgpgLmCCOKPHFkEB
//Camera : price_1Nvl4WH0QgpgLmCCzxrSHt9C
//Mac book Pro: price_1Nvl6qH0QgpgLmCCDkB6fsjI
//Micro cravate : price_1Nvl8OH0QgpgLmCChJStpZnh
//Téléviseur portable :price_1Nvl9rH0QgpgLmCC3Y7rEJuG
//Xbox Series S:price_1NvlBxH0QgpgLmCCMv6N5BPf
// Mini congelateur : price_1NvlEXH0QgpgLmCCcGejQ3yl
// Grille-pain : price_1NvlJuH0QgpgLmCC7T5q0RvF
// Samsung Galaxy S21 : price_1NvlLtH0QgpgLmCCSLlJhMzd
//Lamicall Support de téléphone: price_1NvlNgH0QgpgLmCCrhUWxCCC
// Drone quadrirotor pliable: price_1NvlQbH0QgpgLmCCMEYqBfwM
const express = require('express');
var cors = require('cors')
const stripe = require('stripe')('sk_test_51NviIhH0QgpgLmCCwZs2eIKdglQhZXIKIfMJEN9VJthfx9kWEQJ1xQ3mmvKjaSZBpJJwcxc9um1h4LcraivqBHLI00TJirqgke');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {

    
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                prix: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));