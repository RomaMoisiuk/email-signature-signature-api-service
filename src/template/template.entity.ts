import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Template {
  @PrimaryGeneratedColumn({ name: 'template_id' })
  templateId: number;

  @Column({ unique: true })
  name: string;

  @Column()
  layout: string;
}
