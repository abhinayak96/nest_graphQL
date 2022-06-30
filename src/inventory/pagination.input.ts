import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

// NOTE: use proper naming format for enum
// value should be in lowercase
// enums should have a different file
// file name should have .enum.ts extension
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
// NOTE: use proper naming format for class
export class orderBy {
  @Field((type) => fields)
  field: fields;
  @Field((type) => direction)
  order: direction;
}
