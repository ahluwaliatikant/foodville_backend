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

    constructor(id: string, name: string, logoImageUrl: string, foodCourt: FoodCourt) {
        this.id = id;
        this.name = name;
        //this.menu = menu;
        //this.orders = orders;
        this.logoImageUrl = logoImageUrl;
        this.foodCourt = foodCourt;
    }
}