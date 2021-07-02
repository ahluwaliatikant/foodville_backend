import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
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

    @OneToMany(() => Item, item => item.order)
    items: Item[];

    @ManyToOne(() => Restaurant, restaurant => restaurant.orders)
    restaurant: Restaurant;

    @Column()
    totalAmount: number;

}