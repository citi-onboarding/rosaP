import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Carousel {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @Column()
    image: string //link da imagem

}
