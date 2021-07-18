import { getRepository } from "typeorm";
import { Item } from "../entities/Item";
import { Order } from "../entities/Order";
import { Restaurant } from "../entities/Restaurant";
import { User } from "../entities/User";

interface ItemData {
    id: string,
    name: string,
}

interface OrderData {
    id: string,
    placedAt: Date,
    status: string,
    items: ItemData[],
    restaurant: string,
    totalAmount: number,
    placedBy: string
}

export async function placeOrder(data: OrderData): Promise<Order> {
    if(!data.id) throw new Error("No id received");
    if(!data.status) throw new Error("No status received");
    if(!data.placedAt) throw new Error("No placedAt received");
    if(!data.restaurant) throw new Error("No restaurant received");
    if(!data.totalAmount) throw new Error("No total amount given");
    if(!data.items) throw new Error("No items");


    const orderRepo = await getRepository(Order);
    const itemRepo = await getRepository(Item);
    const restaurantRepo = await getRepository(Restaurant);
    const userRepo = await  getRepository(User);

    try {
        var itemList = [];
        for( var i=0 ; i<data.items.length ; i++){
            const item = await itemRepo.findOne(data.items[i].id);
            itemList.push(item);
        }
        
        console.log(itemList);

        const restaurant = await restaurantRepo.findOne(data.restaurant);
        const user = await userRepo.findOne(data.placedBy);

        console.log(restaurant);
        console.log(user);

        const order = await orderRepo.save(new Order(
            data.id,
            data.placedAt,
            data.status,
            user,
            itemList,
            restaurant,
            data.totalAmount
        )); 
        
        console.log(order);
        return order;
    }catch(e) {
        throw e;
    }

}
