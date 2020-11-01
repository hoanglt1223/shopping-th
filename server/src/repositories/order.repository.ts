import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Order} from '../models';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.orderId
> {
  constructor(@inject('datasources.mongo') dataSource: MongoDataSource) {
    super(Order, dataSource);
  }
}
