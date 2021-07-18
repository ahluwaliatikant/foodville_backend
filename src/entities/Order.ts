import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Item } from "./Item";
import { Restaurant } from "./Restaurant";
import { User } from "./User";

@Entity()
export class Order{

    @PrimaryColumn()
    id: string;

    @CreateDateColumn()
    placedAt: Date;

    @Column()
    status: string;

    @ManyToOne(() => User, user => user.orders)
    placedBy: User;

    @ManyToMany(() => Item)
    @JoinTable()
    items: Item[]

    @ManyToOne(() => Restaurant, restaurant => restaurant.orders)
    restaurant: Restaurant;

    @Column()
    totalAmount: number;

    constructor(id: string,
        placedAt: Date,
        status: string,
        placedBy: User,
        items: Item[],
        restaurant: Restaurant,
        totalAmount: number) {
            this.id = id;
            this.status = status;
            this.placedAt = placedAt;
            this.placedBy = placedBy;
            this.restaurant = restaurant;
            this.items = items;
            this.totalAmount = totalAmount;
    }

}