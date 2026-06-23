import { Injectable } from '@nestjs/common';

@Injectable()
export class TemperatureService {
       celsiusToFahrenheit(celsius: number): number {
              return (celsius * 9/5) + 32;
       }

       fahrenheitToCelsius(fahrenheit: number): number {
              return (fahrenheit - 32) * 5/9;
       }
}
