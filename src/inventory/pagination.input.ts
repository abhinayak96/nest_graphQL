import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

export enum fields {
  name = 'name',
  category = 'category',
  subcategory = 'subcategory',
  price = 'price',
  inStock = 'inStock',
  brand = 'brand',
}
export enum direction {
  ASC = 'ASC',
  DESC = 'DESC',
}
@InputType()
export class orderBy {
  @Field((type) => fields)
  field: fields;
  @Field((type) => direction)
  order: direction;
}
