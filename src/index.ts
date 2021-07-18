import * as express from 'express';
import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entities/User";
import { foodCourtsRoute } from './routes/foodCourt';
import { menuRoute } from './routes/menu';
import { orderRoute } from './routes/order';
import { restaurantsRoute } from './routes/restaurant';
import { usersRoute } from './routes/user';
var bodyParser = require('body-parser')

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use('/api/foodcourts' , foodCourtsRoute)
app.use('/api/restaurants' , restaurantsRoute)
app.use('/api/menu' , menuRoute)
app.use('/api/users' , usersRoute)
app.use('/api/orders' , orderRoute)

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    //const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    //await connection.manager.save(user);
    //console.log("Saved a new user with id: " + user.id);

    //console.log("Loading users from the database...");
    //const users = await connection.manager.find(User);
    //console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

    app.listen(3232 , () => {
        console.log("Server started on http://localhost:3232");
    })

}).catch(error => console.log(error));
