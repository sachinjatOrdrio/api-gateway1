import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Res,
  Query,
} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Observable } from 'rxjs';
import { RoleRpcService } from './role.rpc.service';
import { MessagePatternEnum } from './enums/message-patterns.enum';
import { Response } from 'express';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('roles')
@ApiTags('roles')
export class RoleController {
  constructor(private readonly roleRpcService: RoleRpcService) { }

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async addRole(
    @Body() createRoleDto: CreateRoleDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.roleRpcService
        .sendRequest(MessagePatternEnum.CREATE_ROLE, {
          createRoleDto,
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

  @Patch('/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async updateRole(
    @Param('id') id: string,
    @Body() updateRoleDto: UpdateRoleDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.roleRpcService
        .sendRequest(MessagePatternEnum.UPDATE_ROLE, {
          id,
          updateRoleDto,
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

  @Delete('/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async removeRole(
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.roleRpcService
        .sendRequest(MessagePatternEnum.DELETE_ROLE, { id, user })
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

  @Get('/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async getRole(
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.roleRpcService
        .sendRequest(MessagePatternEnum.GET_ROLE, { id, user })
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
  @ApiQuery({ name: 'cursor', required: false })
  @ApiQuery({ name: 'previousCursor', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @ApiQuery({ name: 'searchKey', required: false })
  async getRolees(
    @Req() req: any,
    @Res() res: Response,
    @Query('storeId') storeId: string,
    @Query('cursor') cursor: string,
    @Query('previousCursor') previousCursor: string,
    @Query('searchKey') searchKey: string,
    @Query('orderBy') orderBy: string,
    @Query('limit') limit: number,
  ) {
    try {
      const user = req.user;
      const response = await this.roleRpcService
        .sendRequest(MessagePatternEnum.GET_ROLES, {
          user,
          storeId,
          limit: limit || 10,
          cursor,
          previousCursor,
          orderBy,
          searchKey,
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

}
