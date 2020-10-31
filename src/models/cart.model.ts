import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Product} from './product.model';
import {User} from './user.model';

@model()
export class Cart extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  items?: string[];

  @hasMany(() => Product)
  products: Product[];

  @belongsTo(() => User, {name: 'owner'})
  userId: string;

  constructor(data?: Partial<Cart>) {
    super(data);
  }
}

export interface CartRelations {
  // describe navigational properties here
}

export type CartWithRelations = Cart & CartRelations;
