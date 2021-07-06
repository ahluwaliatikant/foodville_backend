import { getRepository } from "typeorm";
import { FoodCourt } from "../entities/FoodCourt";
import { Restaurant } from "../entities/Restaurant";

interface AddRestaurantData{
    id: string
    name: string
    logoImageUrl: string
    foodCourt: FoodCourt
}

export async function addRestaurant(data: AddRestaurantData): Promise<Restaurant>  {
    
    if(!data.id) throw new Error("No id");
    if(!data.name) throw new Error("No name");
    if(!data.logoImageUrl) data.logoImageUrl = "";
    if(!data.foodCourt) throw new Error("No food court");

    const restaurantRepo = await getRepository(Restaurant);
    const foodCourtRepo = await getRepository(FoodCourt);

    try{
        const foodCourt = await foodCourtRepo.findOne(data.foodCourt.id);

        const restaurant = await restaurantRepo.save(new Restaurant(
                data.id,
                data.name,
                data.logoImageUrl,
                foodCourt
            )
        )

        return restaurant;
    }catch(e){
        throw e;
    }

}

export async function getRestaurantById(idParam: string) {
    const repo = await getRepository(Restaurant);

    try{
        const restaurant = await repo
            .createQueryBuilder("restaurant")
            .where("restaurant.id = :id" , {id: idParam})
            .leftJoinAndSelect("restaurant.menu" , "item")
            .getOne()

        return restaurant;
    }catch(e){
        throw e;
    }
}
