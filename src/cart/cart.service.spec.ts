import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  const mockProductsService = jest.fn().mockImplementation(() => {
    return {
      getDiscountedPrice: jest.fn().mockReturnValue(80),
      getIVA: jest.fn().mockReturnValue(13),
    };
  });

  beforeEach(() => {
    service = new CartService();
  })

  it('validar que el total se calcule correctamente con multiples items', () =>{
    const total =  service.getTotal();
    expect(total).toBe(93);
  })

  
});
