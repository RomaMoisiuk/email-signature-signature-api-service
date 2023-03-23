import { Template } from 'src/template/template.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class UserData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @OneToOne(() => Template)
  @JoinColumn({ name: 'templateId' })
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
