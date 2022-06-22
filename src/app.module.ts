import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory/inventory.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inventory } from './inventory/inventory.entity';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      database: 'poc',
      url: 'mongodb+srv://rapid:rapid2022@rapid.qagpd.mongodb.net',
      ssl: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      entities: [Inventory],
    }),
    InventoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
