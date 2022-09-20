import { Test, TestingModule } from '@nestjs/testing';
import { CarecontextManagerService } from './carecontext-manager.service';

describe('CarecontextManagerService', () => {
  let service: CarecontextManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarecontextManagerService],
    }).compile();

    service = module.get<CarecontextManagerService>(CarecontextManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
