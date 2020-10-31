import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Cart,
  Product,
} from '../models';
import {CartRepository} from '../repositories';

export class CartProductController {
  constructor(
    @repository(CartRepository) protected cartRepository: CartRepository,
  ) { }

  @get('/carts/{id}/products', {
    responses: {
      '200': {
        description: 'Array of Cart has many Product',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Product)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Product>,
  ): Promise<Product[]> {
    return this.cartRepository.products(id).find(filter);
  }

  @post('/carts/{id}/products', {
    responses: {
      '200': {
        description: 'Cart model instance',
        content: {'application/json': {schema: getModelSchemaRef(Product)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Cart.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Product, {
            title: 'NewProductInCart',
            exclude: ['ID'],
            optional: ['cartId']
          }),
        },
      },
    }) product: Omit<Product, 'ID'>,
  ): Promise<Product> {
    return this.cartRepository.products(id).create(product);
  }

  @patch('/carts/{id}/products', {
    responses: {
      '200': {
        description: 'Cart.Product PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Product, {partial: true}),
        },
      },
    })
    product: Partial<Product>,
    @param.query.object('where', getWhereSchemaFor(Product)) where?: Where<Product>,
  ): Promise<Count> {
    return this.cartRepository.products(id).patch(product, where);
  }

  @del('/carts/{id}/products', {
    responses: {
      '200': {
        description: 'Cart.Product DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Product)) where?: Where<Product>,
  ): Promise<Count> {
    return this.cartRepository.products(id).delete(where);
  }
}
