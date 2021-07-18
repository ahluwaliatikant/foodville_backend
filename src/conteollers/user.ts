import { getRepository } from "typeorm";
import { Order } from "../entities/Order";
import { User } from "../entities/User";

interface UserSignUpData {
    id: string,
    name: string,
    phoneNumber: string,
    profilePicUrl: string,
}

export async function addNewUser(data: UserSignUpData): Promise<User> {
    if(!data.id) throw new Error("NO ID");
    if(!data.name) throw new Error("NO NAME");
    if(!data.phoneNumber) throw new Error("NO PHONE NUMBER");
    if(!data.profilePicUrl) data.profilePicUrl = "";

    try{
        const userRepo = await getRepository(User);
        const user = await userRepo.save( new User(
                data.id,
                data.name,
                data.phoneNumber,
                data.profilePicUrl,
            ));
        
        return user;

    }catch(e){
        throw e;
    }
}


export async function getUserById(idParam: string): Promise<User> {
    if(!idParam) throw new Error("NO ID");

    const repo = await getRepository(User);

    try{
        const user = await repo
            .createQueryBuilder("user")
            .where("user.id = :id" , {id: idParam})
            .getOne();
        console.log(user);
        if(user == null){
            throw new Error("No user with this id");
        }    
        return user;
    }catch(e){
        throw e;
    }
}