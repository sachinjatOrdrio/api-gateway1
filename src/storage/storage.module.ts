import { Module } from '@nestjs/common';
import { AzureBlobStorageService } from './storage.service';
import { StorageController } from './storage.controller';

@Module({
  controllers: [StorageController],
  providers: [AzureBlobStorageService],
})
export class StorageModule {}
