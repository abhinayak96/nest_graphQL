import { ObjectType, Field, Float, Int, InputType } from '@nestjs/graphql';

@ObjectType('Inventory')
export class InventoryType {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  category: string;
  @Field()
  subcategory: string;
  @Field((type) => Float)
  price: string;
  @Field((type) => Int)
  inStock: number;
  @Field()
  brand: string;
}
