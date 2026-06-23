import { Test, TestingModule } from '@nestjs/testing';
import { TemperatureService } from './temperature.service';

describe('TemperatureService', () => {
  let service: TemperatureService;

  beforeEach(() => {
    service = new TemperatureService();
  })

  it('deberia convertir 0°C a 32°F', () => {
    expect(service.celsiusToFahrenheit(0)).toBe(32);
  });

  it('deberia convertir 32°F a 0°C', () => {
    expect(service.fahrenheitToCelsius(32)).toBe(0);
  });
});
