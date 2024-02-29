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
import { BranchesRpcService } from './branches.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { MessagePatternEnum } from './enums/message-patterns.enum';
import { Response } from 'express';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';

@ApiTags('stores/branches')
@Controller('branches')
export class BranchesController {
  constructor(private readonly branchesService: BranchesRpcService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async addBranch(
    @Body() createBranchDto: CreateBranchDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.branchesService
        .sendRequest(MessagePatternEnum.CREATE_BRANCH, {
          createBranchDto,
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
  async updateBranch(
    @Param('id') id: string,
    @Body() updateBranchDto: UpdateBranchDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.branchesService
        .sendRequest(MessagePatternEnum.UPDATE_BRANCH, {
          id,
          updateBranchDto,
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
  async removeBranch(
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.branchesService
        .sendRequest(MessagePatternEnum.DELETE_BRANCH, { id, user })
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
  async getBranch(
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.branchesService
        .sendRequest(MessagePatternEnum.GET_BRANCH, { id, user })
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
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'searchKey', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @ApiQuery({ name: 'descending', required: false })
  async getBranches(
    @Req() req: any,
    @Res() res: Response,
    @Query('storeId') storeId: string,
    @Query('page') page: string,
    @Query('limit') limit: number,
    @Query('orderBy') orderBy: string,
    @Query('searchKey') searchKey: string,
    @Query('descending') descending: string,
  ) {
    try {
      const user = req.user;
      const response = await this.branchesService
        .sendRequest(MessagePatternEnum.GET_BRANCHES, {
          user,
          storeId,
          limit: limit || 10,
          page,
          orderBy,
          searchKey,
          descending,
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
