import { User } from '../entity/User';
import { AppDataSource } from '../data-source';



export class UserService {
    userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    async getAllUsers(): Promise<User[]> {
        try {
            return await this.userRepository.find({});
        } catch (err) {
        }
    }
    // async getUser(id: string): Promise<User> {
    //   try {
    //     const userRepository = getRepository(User);
    //     userRepository.findByIds(id);
    //   }catch(err) {}
    // }
    async addUser(user:User): Promise<User> {
        try {
            return await this.userRepository.save(user);
        }catch(err) {
            console.log(err);
        }
    }
}