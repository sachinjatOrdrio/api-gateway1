import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AzureBlobStorageService } from './storage.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: AzureBlobStorageService) {}

  @Post()
  @ApiConsumes('multipart/form-data') // Specify the media type for file upload
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        bucket: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
      },
      required: ['file', 'bucket', 'name'], // Make file, bucket, and name required
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('bucket') bucket: string,
    @Body('name') name: string,
  ) {
    try {
      const fileUrl = await this.storageService.uploadToAzureBlobStorage(
        bucket,
        name,
        file,
      );
      return { fileUrl };
    } catch (error) {
      return { error: error.message };
    }
  }
}
