import { Router } from "express";
import { deleteOrder, getOrdersByRestaurant, getOrdersByUser, placeOrder, updateOrderStatus } from "../conteollers/order";
import { restaurantsRoute } from "./restaurant";

const route = Router();

route.post("/" , async(req , res) => {
    try{
        console.log("PLACE ORDER REQ BODY");
        console.log(req.body);
        const order  = await placeOrder(req.body);
        return res.status(201).json({order})
    }catch(e){
        return res.status(422).json({
            errors: {body: ['place order failed' , e.message]}
        })
    }
})

route.get("/users/:id/:status" , async(req,res) =>{
    try{
        const userId = req.params.id;
        const status = req.params.status;    
        const orders = await getOrdersByUser(userId , status);
        return res.status(201).json({orders});
    }catch(e){
        return res.status(422).json({
            errors: {body:['get orders failed' , e.message]}
        })
    }
})

route.get("/restaurants/:id/:status" , async(req , res) => {
    try{
        const resId = req.params.id;
        const status = req.params.status;
        const orders = await getOrdersByRestaurant(resId , status);
        return res.status(201).json({orders});
    }catch(e){
        return res.status(422).json({
            error: {body: ['get orders failed' , e.message]}
        })
    }
})

route.put("/" , async(req , res) => {
    try{
        console.log(req.body);
        await updateOrderStatus(req.body);
        return res.status(201);
    }catch(e){
        return res.status(422).json({
            error: {body: ['failed to update status' , e.message]}
        })
    }
})

route.put("/:id" , async(req,res)=> {
    try{
        const id = req.params.id;
        await deleteOrder(id);
        return res.status(201);
    }catch(e){
        return res.status(422).json({
            error: {body: ['failed to update status' , e.message]}
        })
    }
})
export const orderRoute = route;