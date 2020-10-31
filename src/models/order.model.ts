import {belongsTo, Entity, model, property} from '@loopback/repository';
import {ShoppingCartItem} from './shopping-cart-item.model';
import {User} from './user.model';

@model()
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  orderId?: string;

  @property({
    type: 'date',
  })
  date?: string;

  // Each order belongs to a user, indentified by its id (userId)
  @belongsTo(() => User)
  userId: string;

  @property({
    type: 'string',
  })
  fullName: string;

  @property({
    type: 'number',
  })
  total?: number;

  @property.array(ShoppingCartItem, {required: true})
  products: ShoppingCartItem[];

  constructor(data?: Partial<Order>) {
    super(data);
  }
}
