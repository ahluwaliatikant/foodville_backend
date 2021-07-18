import { Router } from "express";
import { addNewUser, getUserById } from "../conteollers/user";

const route = Router();

route.post('/' , async (req,res) => {
    try{
        console.log(req.body);
        const user  = await addNewUser(req.body)
        return res.status(201).json({user})
    }catch(e){
        throw e;
    }
})

route.get('/:id' , async(req,res) => {
    try{
        const user = await getUserById(req.params.id)
        return res.status(201).json({user})
    }catch(e){
        return res.status(422).json({
            errors: {body: ['Could not get user with this id' , e.message]}
        })
    }
})

export const usersRoute = route