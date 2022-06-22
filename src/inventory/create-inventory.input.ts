import {
  InputType,
  Field,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateInventoryInput {
  @Field()
  name: string;
  @Field()
  category: string;
  @Field()
  subcategory: string;
  @Field((type) => Float)
  price: number;
  @Field((type) => Int)
  inStock: number;
  @Field()
  brand: string;
}
