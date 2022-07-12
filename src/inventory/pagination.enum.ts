import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

export enum searchFields {
  name = 'name',
  category = 'category',
  subcategory = 'subcategory',
  price = 'price',
  inStock = 'inStock',
  brand = 'brand',
}
export enum orderDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}
@InputType()
export class orderBy {
  @Field((type) => searchFields)
  field: searchFields;
  @Field((type) => orderDirection)
  order: orderDirection;
}
