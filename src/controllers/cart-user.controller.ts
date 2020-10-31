import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Cart,
  User,
} from '../models';
import {CartRepository} from '../repositories';

export class CartUserController {
  constructor(
    @repository(CartRepository)
    public cartRepository: CartRepository,
  ) { }

  @get('/carts/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to Cart',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.string('id') id: typeof Cart.prototype.id,
  ): Promise<User> {
    return this.cartRepository.owner(id);
  }
}
