import { Router } from "express";
import { addItem, getMenu } from "../conteollers/menu";

const route = Router()

route.post('/' , async(req,res) => {
    try{
        console.log(req.body);
        const item  = await addItem(req.body)
        return res.status(201).json({item})
    }catch(e){
        return res.status(422).json({
            errors: {body: ['add menu failed' , e.message]}
        })
    }
})

route.get('/:id' , async(req,res) => {
    try{
        const menu = await getMenu(req.params.id);
        console.log(menu);
        return res.status(201).json({menu})
    }catch(e){
        return res.status(422).json({
            errors: {body: ['Could not get menu' , e.message]}
        })
    }
})

export const menuRoute = route