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

    constructor(id: string, name: string, location: string) {
        this.id = id;
        this.name = name;
        this.location = location;
    }
}