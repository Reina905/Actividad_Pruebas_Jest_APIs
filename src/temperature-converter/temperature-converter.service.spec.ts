import { Test, TestingModule } from '@nestjs/testing';
import { TemperatureConverterService } from './temperature-converter.service';

describe('TemperatureConverterService', () => {
  let service: TemperatureConverterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemperatureConverterService],
    }).compile();

    service = module.get<TemperatureConverterService>(TemperatureConverterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
