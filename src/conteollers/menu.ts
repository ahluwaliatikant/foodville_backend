import { getRepository } from "typeorm";
import { Item } from "../entities/Item";
import { Restaurant } from "../entities/Restaurant";

interface addItemData{
    id: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    restaurantId: string,
}


export async function addItem(data: addItemData): Promise<Item>{
    if(!data.restaurantId) throw new Error("NO RESTAURANT ID");
    if(!data.name) throw new Error("NO NAME");
    if(!data.description) throw new Error("NO DESCRIPTION");
    if(!data.price) throw new Error("NO PRICE");
    if(!data.imageUrl) data.imageUrl = "";

    const restaurantRepo = await getRepository(Restaurant);
    const itemRepo = await getRepository(Item);

    try{
        const restaurant = await restaurantRepo.findOne(data.restaurantId);

        const item = itemRepo.save(new Item(
                data.id,
                data.name,
                data.description,
                data.price,
                restaurant,
                data.imageUrl
            )
        )
        return item;
    }catch(e){
        throw e;
    }
}

export async function getMenu(resId: string) {
    if(!resId) throw Error("id is blank");

    const repo = await getRepository(Item);

    try{
        const menu = await repo
            .createQueryBuilder("item")
            .where("item.restaurant.id = :id" , {id: resId})
            .getMany()

        return menu;
    }catch(e){
        throw e;
    }

}