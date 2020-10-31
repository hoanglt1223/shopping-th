import {belongsTo, Entity, model, property} from '@loopback/repository';
import {ShoppingCartItem} from './shopping-cart-item.model';
import {User} from './user.model';

@model()
export class ShoppingCart extends Entity {
  /**
   * Each shopping cart belongs to a user, indentified by its id (userId)
   */
  @belongsTo(() => User)
  userId: string;

  /**
   * Items in the shopping cart
   */
  @property.array(ShoppingCartItem)
  items?: ShoppingCartItem[];

  constructor(data?: Partial<ShoppingCart>) {
    super(data);
  }
}
