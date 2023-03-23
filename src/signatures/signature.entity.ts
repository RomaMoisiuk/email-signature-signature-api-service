import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Signature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  signature: string;
}
