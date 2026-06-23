import { Injectable } from '@nestjs/common';
import {ProductsService} from '../products/products.service';

@Injectable()
export class CartService {
       public productos: any[] = [];
       public productsService: ProductsService = new ProductsService();

       addItem(productID: string, price: number, quantity: number): string {
              this.productos.push({id: productID, price: price, quantity: quantity});
              return `Producto ${productID} agregado al carrito con cantidad ${quantity}`;
       }

       getTotal(): number {
              let total = 0;
              for (const product of this.productos) {
                     const discountedPrice = this.productsService.getDiscountedPrice(product.price, product.discount);
                     const iva = this.productsService.getIVA(discountedPrice);
                     total += discountedPrice + iva;
              }
              return total;
       }

       applyGlobalDiscount(discount: number): number {
              const total = this.getTotal();
              return total - (total * discount / 100);
       }
}
