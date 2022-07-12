import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateInventoryInput } from './create-inventory.input';
import { InventoryService } from './inventory.service';
import { InventoryType } from './inventory.type';
import { orderDirection, searchFields, orderBy } from './pagination.enum';

@Resolver((of) => InventoryType)
export class InventoryResolver {
  constructor(private inventoryService: InventoryService) {}
  @Query((returns) => [InventoryType])
  inventories(
    @Args({ name: 'limit', type: () => Int, nullable: true, defaultValue: 0 })
    limit: number,
    @Args({ name: 'skip', type: () => Int, nullable: true, defaultValue: 0 })
    skip: number,
    @Args({
      name: 'orderBy',
      nullable: true,
      defaultValue: 'name',
    })
    orderBy: searchFields,
    @Args({
      name: 'orderDirection',
      nullable: true,
      defaultValue: 'ASC',
    })
    orderDirection: orderDirection,
    @Args({
      name: 'name',
      nullable: true,
    })
    name: string,
    @Args({
      name: 'category',
      nullable: true,
    })
    category: string,
    @Args({
      name: 'id',
      nullable: true,
    })
    id: string,
  ) {
    let searchQuery = {};
    if (name) {
      searchQuery['name'] = name;
    }
    if (category) {
      searchQuery['category'] = category;
    }
    if (id) {
      searchQuery['id'] = id;
    }

    return this.inventoryService.findAll(
      limit,
      skip,
      orderBy,
      orderDirection,
      JSON.stringify(searchQuery),
    );
  }

  @Query((returns) => InventoryType)
  async inventory(@Args('id') id: string) {
    return this.inventoryService.findOne(id);
  }

  @Mutation((returns) => InventoryType)
  async createInventory(
    @Args('createInventoryInput') createInventoryInput: CreateInventoryInput,
  ) {
    return this.inventoryService.createInventories(createInventoryInput);
  }
}
