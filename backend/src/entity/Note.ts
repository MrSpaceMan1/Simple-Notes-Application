import { IsDate, IsNotEmpty, Length } from 'class-validator';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Length(3, 500)
  @Column({ type: 'varchar', length: 500 })
  content: string;

  @IsNotEmpty()
  @Length(3, 100)
  @Column({ type: 'varchar', length: 100 })
  title: string;

  @IsDate()
  @Column({ type: 'datetime' })
  creationDate: Date;

  @BeforeInsert()
  setCreation() {
    this.creationDate = new Date(Date.now());
  }
}
