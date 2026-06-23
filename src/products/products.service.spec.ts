import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

    beforeEach(() => {
      service = new ProductsService();
    })

    it('calcular el precio 100 con descuento de 20% = 80', () => {
      expect(service.getDiscountedPrice(100, 20)).toBe(80);
    });

    it('calcular IVA de 100 = 13', () => {
      expect(service.getIVA(100)).toBe(13);
    });

    it('deberia lanzar un error al calcular el precio con descuento de mayor de 100', () => {
      expect(() => service.getDiscountedPrice(100, 120)).toThrow('El descuento debe estar entre 0 y 100');
    });
});
