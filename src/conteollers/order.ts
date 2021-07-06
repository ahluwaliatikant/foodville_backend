import { Item } from "../entities/Item";
import { Restaurant } from "../entities/Restaurant";

interface OrderData {
    id: string,
    placedAt: Date,
    status: string,
    items: Item[],
    restaurant: Restaurant,
    totalAmount: number,
}

export async function placeOrder(data:OrderData , userId: string) {
    if(!data.id) throw new Error("No id received");
    if(!data.status) throw new Error("No status received");
    if(!data.placedAt) throw new Error("No placedAt received");
    if(!data.restaurant) throw new Error("No restaurant received");
    if(!data.id) throw new Error("No id receive");
}
