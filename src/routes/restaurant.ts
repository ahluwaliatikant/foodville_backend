import {Router} from 'express';
import { addRestaurant, getRestaurantById } from '../conteollers/restaurant';

const route = Router()

route.post('/' , async (req, res) => {
    try{
        console.log(req.body);
        const restaurant  = await addRestaurant(req.body)
        return res.status(201).json({restaurant})
    }catch(e){
        return res.status(422).json({
            errors: {body: ['add restaurant failed' , e.message]}
        })
    }
})

route.get('/:id' , async(req,res) => {
    try{
        const restaurant = await getRestaurantById(req.params.id)
        return res.status(201).json({restaurant})
    }catch(e){
        return res.status(422).json({
            errors: {body: ['Could not get restaurant with this id' , e.message]}
        })
    }
})

export const restaurantsRoute = route