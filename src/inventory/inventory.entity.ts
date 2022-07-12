import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Inventory {
  @Column()
  id: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  subcategory: string;

  @Column()
  price: number;

  @Column()
  inStock: number;

  @Column()
  brand: string;
}

class domainValue {
  @Column()
  name: string;

  @Field({ nullable: true })
  parentId: string;
}
