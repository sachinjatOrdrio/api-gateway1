import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Req,
  Res,
  Query,
} from '@nestjs/common';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
import { MessagePatternEnum } from './enums/message-patterns.enum';
import { ThemeRpcService } from './theme.rpc.service';
import { ApiBearerAuth, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { Response } from 'express';

@ApiTags('designs')
@Controller('designs')
export class ThemeController {
  constructor(private readonly themeRpcService: ThemeRpcService) {}
  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async create(
    @Body() createThemeDto: CreateThemeDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.themeRpcService
        .sendRequest(MessagePatternEnum.CREATE_THEME, { createThemeDto, user })
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiParam({ name: 'id', required: true })
  async update(
    @Param('id') id: string,
    @Body() updateThemeDto: UpdateThemeDto,
    @Req() req: any,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const response = await this.themeRpcService
        .sendRequest(MessagePatternEnum.UPDATE_THEME, {
          id,
          updateThemeDto,
          user: req.user,
        })
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiQuery({ name: 'storeId', required: true })
  @ApiQuery({ name: 'cursorId', required: false })
  @ApiQuery({ name: 'previousCursorId', required: false })
  @ApiQuery({ name: 'limit', required: false })
  async findByStore(
    @Query('storeId') storeId: string,
    @Query('cursorId') cursorId: string,
    @Query('previousCursorId') previousCursorId: string,
    @Query('limit') limit: number,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.themeRpcService
        .sendRequest(MessagePatternEnum.GET_THEMES, {
          storeId,
          cursorId,
          previousCursorId,
          limit,
          user,
        })
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiParam({ name: 'id', required: true })
  async findOne(
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      console.log('get theme', id);
      const user = req.user;
      const response = await this.themeRpcService
        .sendRequest(MessagePatternEnum.GET_THEME, { id, user: user })
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }
}
