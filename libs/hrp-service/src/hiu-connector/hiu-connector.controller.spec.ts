import { Test, TestingModule } from '@nestjs/testing';
import { HiuConnectorController } from './hiu-connector.controller';

describe('HiuConnectorController', () => {
  let controller: HiuConnectorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HiuConnectorController],
    }).compile();

    controller = module.get<HiuConnectorController>(HiuConnectorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
