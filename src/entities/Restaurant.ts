import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { FoodCourt } from "./FoodCourt";
import { Item } from "./Item";
import { Order } from "./Order";

@Entity()
export class Restaurant {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    logoImageUrl: string;

    @OneToMany(() => Item, item => item.restaurant)
    menu: Item[];

    @ManyToOne(() => FoodCourt, foodCourt => foodCourt.restaurants)
    foodCourt: FoodCourt;

    @OneToMany(() => Order, order => order.restaurant)
    orders: Order[];
}