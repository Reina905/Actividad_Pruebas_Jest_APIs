import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathService } from './math/math.service';
import { ProductsService } from './products/products.service';
import { TemperatureConverterService } from './temperature-converter/temperature-converter.service';
import { TemperatureService } from './temperature/temperature.service';
import { CartService } from './cart/cart.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MathService, ProductsService, TemperatureConverterService, TemperatureService, CartService],
})
export class AppModule {}
