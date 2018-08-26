import { Entity, Column, PrimaryGeneratedColumn , CreateDateColumn , UpdateDateColumn} from 'typeorm';


@Entity('user_tbl')
export class User_Entity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

}
