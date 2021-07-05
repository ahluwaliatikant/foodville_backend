import {Router} from 'express';
import { addFoodCourt, getAllFoodCourts, getFoodCourtById } from '../conteollers/foodCourt';

const route = Router()

route.post('/' , async (req, res) => {
    try{
        console.log(req.body);
        const foodCourt =  await addFoodCourt(req.body)
        return res.status(201).json({foodCourt})
    }catch(e){
        return res.status(422).json({
            errors: {body: ['add food court failed' , e.message]}
        })
    }
})

route.get('/' , async (req , res) => {
    try{
        const foodCourts = await getAllFoodCourts()
        return res.status(201).json({foodCourts})
    }catch(e){
        return res.status(422).json({
            errors: {body: ['Could not get food courts' , e.message]}
        })
    }
})

route.get('/:id' , async (req , res) => {
    try{
        const foodCourt = await getFoodCourtById(req.params.id)
        return res.status(201).json({foodCourt})
    }catch(e){
        return res.status(422).json({
            errors: {body: ['Could not get food court with this id' , e.message]}
        })
    }
})

export const foodCourtsRoute = route