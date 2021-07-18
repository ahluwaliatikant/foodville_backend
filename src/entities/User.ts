import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToMany} from "typeorm";
import { Order } from "./Order";

@Entity()
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    phoneNumber: string;

    @Column()
    profilePicUrl: string;

    @OneToMany(() => Order, order => order.placedBy)
    orders: Order[];

    constructor (id: string , name: string , phoneNumber: string , profilePicUrl: string){
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.profilePicUrl = profilePicUrl;
    }

}
