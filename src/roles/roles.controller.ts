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
} from '@nestjs/common';
import { RolesRpcService } from './roles.rpc.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { Response } from 'express';
import { MessagePatternEnum } from './enums/message-patterns.enum';

@ApiTags('stores/roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesRpcService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async createRole(
    @Body() createRoleDto: CreateRoleDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.rolesService
        .sendRequest(MessagePatternEnum.CREATE_ROLE, {
          createRoleDto,
          user,
        })
        .toPromise();
      res
        .status(response.status_code)
        .json({ ...response, status_code: undefined });
      return;
    } catch (error) {}
  }

  @Get('/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async findRole(
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.rolesService
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

  @Patch('/:id')
  async updateRole(
    @Param('id') id: string,
    @Body() updateRoleDto: UpdateRoleDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.rolesService
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

  // @Get()
  // findAll() {
  //   return this.rolesService.findAll();
  // }

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
      const response = await this.rolesService
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
}
