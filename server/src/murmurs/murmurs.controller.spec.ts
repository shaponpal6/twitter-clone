import { Test, TestingModule } from '@nestjs/testing';
import { MurmursController } from './murmurs.controller';

describe('MurmursController', () => {
  let controller: MurmursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MurmursController],
    }).compile();

    controller = module.get<MurmursController>(MurmursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
