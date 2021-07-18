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

    @ManyToOne(() => Restaurant, restaurant => restaurant.menu)
    restaurant: Restaurant;

    constructor(id: string, name: string, description: string, price: number, restaurant: Restaurant, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.restaurant = restaurant;
        this.imageUrl = imageUrl;
    }

}