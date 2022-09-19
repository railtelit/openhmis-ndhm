import { Test, TestingModule } from '@nestjs/testing';
import { HipmanagerService } from './hipmanager.service';

describe('HipmanagerService', () => {
  let service: HipmanagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HipmanagerService],
    }).compile();

    service = module.get<HipmanagerService>(HipmanagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
