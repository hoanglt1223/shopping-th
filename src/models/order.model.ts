import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Product} from './product.model';
import {User} from './user.model';

@model()
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  @hasMany(() => Product)
  items: Product[];

  @belongsTo(() => User)
  userId: string;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
