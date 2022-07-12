import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import { CreateInventoryInput } from './create-inventory.input';
import { Inventory } from './inventory.entity';
import { v4 as uuid } from 'uuid';

import { orderDirection, searchFields } from './pagination.enum';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
  ) {}

  async findAll(
    limit?: number,
    skip?: number,
    orderBy?: string,
    orderDirection?: orderDirection,
    searchQuery?: string,
  ): Promise<Inventory[]> {
    return this.inventoryRepository.find({
      where: searchQuery ? JSON.parse(searchQuery) : {},
      skip,
      take: limit,
      order: { [orderBy]: orderDirection },
    });
    // return this.inventoryRepository
    //   .createQueryBuilder('inventory')
    //   .skip(skip)
    //   .take(limit)
    //   .orderBy(orderBy, orderDirection)
    //   .getMany();
    // return getRe
  }
  // async search(field,search): Promise<Inventory>{
  //   return this.inventoryRepository.findBy()
  // }
  async findOne(id: string): Promise<Inventory> {
    // console.log(id);
    return this.inventoryRepository.findOneBy({ id });
  }
  async createInventories(
    createInventoryInput: CreateInventoryInput,
  ): Promise<Inventory> {
    const { name, category, subcategory, price, inStock, brand } =
      createInventoryInput;
    const inventory = this.inventoryRepository.create({
      id: uuid(),
      name,
      category,
      subcategory,
      price,
      inStock,
      brand,
    });

    return this.inventoryRepository.save(inventory);
  }
}
