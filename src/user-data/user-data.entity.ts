import { Template } from '../template/template.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class UserData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => Template)
  @JoinColumn()
  template: Template;

  @Column()
  fullName: string;

  @Column()
  title: string;

  @Column()
  company: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  email: string;
}
