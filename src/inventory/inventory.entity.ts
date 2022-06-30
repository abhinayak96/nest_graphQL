import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Inventory {
  @PrimaryColumn() // NOTE: primary column is not required for mongoDB as there is no primary constraint in mongoDB
  @ObjectIdColumn()
  _id: string;

  // NOTE: what is the purpose of having 2 id columns in a single entity
  @PrimaryColumn()
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

// NOTE: use proper class name
class domainValue {
  @Column()
  name: string;

  @Field({ nullable: true })
  parentId: string;
}
