import { Test, TestingModule } from '@nestjs/testing';
import { HipConnectorController } from './hip-connector.controller';

describe('HipConnectorController', () => {
  let controller: HipConnectorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HipConnectorController],
    }).compile();

    controller = module.get<HipConnectorController>(HipConnectorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
