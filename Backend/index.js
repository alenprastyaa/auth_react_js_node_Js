import express from "express";
import cors from 'cors'
import session from "express-session";
import dotenv from 'dotenv'
import db from './config/Database.js'
import sequelizeStore from 'connect-session-sequelize'
import UserRoute from './routes/UserRoute.js'
import ProductRoute from './routes/ProductRoute.js'
import AuthRoute from "./routes/AtuhRoute.js"
dotenv.config()

const SESS_SECRET = "ry3479fuirj67890ihjbndwebhwgeuifdhwjfwhgf8wefyhewufhdi"
const app = express();

const sessionStore = sequelizeStore(session.Store)
const store = new sessionStore({
    db: db
})


// (async () => {
//     await db.sync()
// })()

// db.sync()
app.use(session({
    secret: SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: "auto"
    }
}))
// Midleware
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

app.use(express.json())
app.use(UserRoute)
app.use(ProductRoute)
app.use(AuthRoute)

// store.sync()

app.listen(process.env.APP_PORT, () => {
    console.log("Server up And Running ...", process.env.APP_PORT)
})