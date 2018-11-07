# Benefit
## Enabling the unbanked to take contactless payments in person.

> [View 'Benefit' repo on Github](https://github.com/Benefit-ConstructorLabs/benefit)

--- 

### The vision
In an increasingly cashless society, those who rely on cash are hardest hit.

As fewer people carry loose change, those who rely on the generosity of strangers - homeless people, buskers etc. - are losing the income stream they rely on.

By enabling these people to receive contactless payments, **BENEFIT** aims to make a big difference with a small change in how we give.

---

### Installation and set up
Clone the project and run `npm install`

Create your own local PostreSQL database and create the tables by running `pgweb` navigating to localhost:8081 and running the query in the database.sql file.

Run `npm start` to launch the app and navigate to localhost:8080

---

### Tech stack

#### Front end
 - React
 - Handlebars
 - SCSS

#### Back end
- Node.js
- Express
- PostreSQL

#### Build tools
- Webpack
- Babel

#### Unit Testing
- Jest

#### QR code 

- We used 'qrcode' node package to create the QR code
+ The QR code image is generated inside the app
+ Not reliant on a 3rd party API to create the image
+ THe QR code can be scaled and styled
+ We can set the error correction level

> ['qrcode' node package](https://www.npmjs.com/package/qrcode)

