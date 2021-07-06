import { getRepository } from "typeorm";
import { FoodCourt } from "../entities/FoodCourt";

interface addFoodCourtData {
    id: string
    name: string
    location: string
}

export async function addFoodCourt(data: addFoodCourtData): Promise<FoodCourt> {

    console.log("THIS ISS MY DTATATTA::   " + data.id + data.location + data.name);
    if(!data.id) throw Error("ID is blank");
    if(!data.name) throw Error("Name is blank");
    if(!data.location) throw Error("Location is blank");

    const repo = await getRepository(FoodCourt);

    try{
        const foodCourt = await repo.save(
            new FoodCourt(
                data.id,
                data.name,
                data.location
            )
        );
        return foodCourt;
    } catch(e){
        throw e
    }

}

export async function getFoodCourtById(idParam: string): Promise<FoodCourt> {
    if(!idParam) throw Error("id is blank");

    const repo = await getRepository(FoodCourt);

    try{
        const foodCourt = await repo
            .createQueryBuilder("foodCourt")
            .leftJoinAndSelect("foodCourt.restaurants" , "restautant")
            .where("foodCourt.id = :id" , {id: idParam})
            .getOne();

        return foodCourt;
    }catch (e){
        throw e;
    }
}

export async function getAllFoodCourts(): Promise<FoodCourt[]> {

    const repo = await getRepository(FoodCourt);

    try{
        const foodCourts = await repo
            .createQueryBuilder("foodCourt")
            .leftJoinAndSelect("foodCourt.restaurants" , "restautant")
            .getMany()

        return foodCourts;
    }catch(e){
        throw e;
    }
    
}