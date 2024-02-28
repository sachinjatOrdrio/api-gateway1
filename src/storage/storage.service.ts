import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  BlobServiceClient,
  StorageSharedKeyCredential,
} from '@azure/storage-blob';
import { Express } from 'express';

@Injectable()
export class AzureBlobStorageService {
  private blobServiceClient: BlobServiceClient;

  constructor(private readonly configService: ConfigService) {
    const accountName = this.configService.get<string>('AZURE_BLOB_ACCOUNT');
    const accountKey = this.configService.get<string>('AZURE_BLOB_KEY');
    const sharedKeyCredential = new StorageSharedKeyCredential(
      accountName,
      accountKey,
    );
    this.blobServiceClient = new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net`,
      sharedKeyCredential,
    );
  }

  async uploadToAzureBlobStorage(
    bucket: string,
    name: string,
    file: Express.Multer.File,
  ): Promise<string> {
    try {
      const containerClient = this.blobServiceClient.getContainerClient(bucket);
      const blobName = name;
      const blobClient = containerClient.getBlockBlobClient(blobName);

      const data = file.buffer;
      const uploadBlobResponse = await blobClient.upload(data, data.length);
      console.log(uploadBlobResponse);

      return blobClient.url;
    } catch (error) {
      console.error(
        'Error uploading file to Azure Blob Storage:',
        error.message,
      );
      throw new Error('Error uploading file to Azure Blob Storage');
    }
  }
}
