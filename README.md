# Better Change
## In person cashless donations.

> [View 'Benefit' repo on Github](https://github.com/Benefit-ConstructorLabs/benefit)

--- 

### The vision
In an increasingly cashless society, in-person donations collections are falling fast.

1. Super-quick in-person flow and sign up
2. Minimal cost / work for anyone to start collecting donations
3. Secure payment processing and anonymous donation flow.

As fewer people carry loose change, those who rely on the generosity of strangers - homeless people, buskers etc. - are losing the income stream they rely on.

By enabling these people to receive contactless payments, **BENEFIT** aims to make a big difference with a small change in how we give.

---

### Installation and set up
Clone the project and run `npm install`

Create your own local PostreSQL database insatnce and create the tables by running `pgweb` navigating to localhost:8081 and running the query in the database.sql file.

Run `npm start` to launch the app and navigate to localhost:8080

API Keys needed:

+ Amazon S3
+ Stripe
+ Twilio

---

### Tech stack

#### Front end
 - React
 - Redux
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

#### Card and native payment - Stripe elements

- Stripe Elements API provides our secure hosting
 
> ['Stripe elements' node package](https://stripe.com/payments/elements)

#### Authorisation and authentication - Passport

#### Image hosting - Amazon S3




#### Data visulisations - Recharts.js


> ['Recharts' node package](http://recharts.org/en-US/)

#### Next Steps
- Create React Native app
- Emit bluetooth urls
- Pay out to bank accounts

QR codes are not always the best solution for in person payment because they require you to be in close proximity to capture with a camera.

We have started playing around with Bluetooth beacons and have used an android phone to emit our unique payment urls for people to pick up in the immediate area.





