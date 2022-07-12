import { Test, TestingModule } from '@nestjs/testing';
import { CreateInventoryInput } from './create-inventory.input';
import { Inventory } from './inventory.entity';
import { InventoryResolver } from './inventory.resolver';
import { InventoryService } from './inventory.service';

describe('inventoryResolver', () => {
  let resolver: InventoryResolver;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InventoryResolver,
        {
          provide: InventoryService,
          useFactory: () => ({
            createInventories: jest.fn((inventory: Inventory) => ({
              id: '2084ecff-3b5f-463d-859c-f927a716f667',
              ...inventory,
            })),
            findAll: jest.fn(() => [
              {
                id: '2084ecff-3b5f-463d-859c-f927a716f667',
                name: 'Air one',
                category: 'shoes',
                subcategory: 'casuals',
                price: 100,
                inStock: 100,
                brand: 'Nike',
              },

              {
                id: '2084ecff-3b5f-463d-859c-f927a716f667',
                name: 'Air one',
                category: 'shoes',
                subcategory: 'casuals',
                price: 100,
                inStock: 100,
                brand: 'Nike',
              },
            ]),
            findOne: jest.fn((id: string) => ({
              id: '2084ecff-3b5f-463d-859c-f927a716f667',
              name: 'Air one',
              category: 'shoes',
              subcategory: 'casuals',
              price: 100,
              inStock: 100,
              brand: 'Nike',
            })),
          }),
        },
      ],
    }).compile();
    resolver = module.get<InventoryResolver>(InventoryResolver);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
  describe('inventory', () => {
    it('should find and return an inventory', async () => {
      const inventory = await resolver.inventory(
        '2084ecff-3b5f-463d-859c-f927a716f667',
      );
      expect(inventory).toEqual({
        id: '2084ecff-3b5f-463d-859c-f927a716f667',
        name: 'Air one',
        category: 'shoes',
        subcategory: 'casuals',
        price: 100,
        inStock: 100,
        brand: 'Nike',
      });
    });
  });
  describe('inventories', () => {
    it('should find and return a list of inventories', async () => {
      const inventories = await resolver.inventories(
        0,
        0,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      );
      expect(inventories).toContainEqual({
        id: '2084ecff-3b5f-463d-859c-f927a716f667',
        name: 'Air one',
        category: 'shoes',
        subcategory: 'casuals',
        price: 100,
        inStock: 100,
        brand: 'Nike',
      });
    });
  });

  describe('createInventory', () => {
    it('should create and return a inventory', async () => {
      const createInventory: CreateInventoryInput = {
        name: 'Air one',
        category: 'shoes',
        subcategory: 'casuals',
        price: 100,
        inStock: 100,
        brand: 'Nike',
      };
      const customer = await resolver.createInventory(createInventory);
      expect(customer).toEqual({
        id: '2084ecff-3b5f-463d-859c-f927a716f667',
        name: 'Air one',
        category: 'shoes',
        subcategory: 'casuals',
        price: 100,
        inStock: 100,
        brand: 'Nike',
      });
    });
  });
});
