import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { StoresRpcService } from './stores.rpc.service';
import { Response } from 'express';
export declare class StoresController {
    private readonly storesRpcService;
    constructor(storesRpcService: StoresRpcService);
    create(createStoreDto: CreateStoreDto, req: any, res: Response): Promise<void>;
    findAll(): import("rxjs").Observable<any>;
    findOne(id: string): import("rxjs").Observable<any>;
    update(id: string, updateStoreDto: UpdateStoreDto): import("rxjs").Observable<any>;
    remove(id: string): import("rxjs").Observable<any>;
}
