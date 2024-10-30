import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    task: string;

    @Column({ type: "varchar" })
    description: string;
    @Column({ type: "int" })
    userId: number;

    constructor ( username: string, password: string , userId: number ) {
        this.task = username;
        this.description = password;
        this.userId = userId;
    }
}
