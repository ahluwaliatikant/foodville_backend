import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Order } from "./Order";
import { Restaurant } from "./Restaurant";

@Entity()
export class Item{

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    imageUrl: string;

    @ManyToOne(() => Order, order => order.items)
    order: Order;

    @ManyToOne(() => Restaurant, restaurant => restaurant.menu)
    restaurant: Restaurant;
}