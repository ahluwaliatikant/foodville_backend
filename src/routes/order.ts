import { Router } from "express";
import { placeOrder } from "../conteollers/order";

const route = Router();

route.post("/" , async(req , res) => {
    try{
        console.log(req.body);
        const order  = await placeOrder(req.body);
        return res.status(201).json({order})
    }catch(e){
        return res.status(422).json({
            errors: {body: ['place order failed' , e.message]}
        })
    }
})

export const orderRoute = route;
