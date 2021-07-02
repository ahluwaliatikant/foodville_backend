import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Restaurant } from "./Restaurant";

@Entity()
export class FoodCourt {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    location: string;

    @OneToMany(() => Restaurant , restaurant =>  restaurant.foodCourt)
    restaurants: Restaurant[];
}