import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
import { ThemeRpcService } from './theme.rpc.service';
import { Response } from 'express';
export declare class ThemeController {
    private readonly themeRpcService;
    constructor(themeRpcService: ThemeRpcService);
    create(createThemeDto: CreateThemeDto, req: any, res: Response): Promise<void>;
    update(id: string, updateThemeDto: UpdateThemeDto, req: any, res: Response): Promise<any>;
    findByStore(storeId: string, cursorId: string, previousCursorId: string, limit: number, req: any, res: Response): Promise<void>;
    findOne(id: string, req: any, res: Response): Promise<void>;
}
