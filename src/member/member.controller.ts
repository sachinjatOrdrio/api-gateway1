import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Res,
  Delete,
  Param,
  Patch,
  Get,
  Query,
} from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { Response } from 'express';
import { MemberRpcService } from './member.rpc.service';
import { MessagePatternEnum } from './enums/message-patterns.enum';

@ApiTags('stores/members')
@Controller('members')
export class MemberController {
  constructor(private readonly memberRpcService: MemberRpcService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async addMember(
    @Body() createMemberDto: CreateMemberDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.memberRpcService
        .sendRequest(MessagePatternEnum.CREATE_MEMBER, {
          createMemberDto,
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
  async removeMember(
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.memberRpcService
        .sendRequest(MessagePatternEnum.DELETE_MEMBER, { id, user })
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
  async updateMember(
    @Param('id') id: string,
    @Body() updateMemberDto: UpdateMemberDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.memberRpcService
        .sendRequest(MessagePatternEnum.UPDATE_MEMBER, {
          id,
          updateMemberDto,
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

  @Get()
  @ApiQuery({ name: 'uid', required: false })
  @ApiQuery({ name: 'storeId', required: false })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async getMember(
    @Query('uid') uid: string,
    @Query('storeId') storeId: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.memberRpcService
        .sendRequest(MessagePatternEnum.GET_MEMBER, { uid, storeId, user })
        .toPromise();
      const status_code = response.status_code || 200;
      res.status(status_code).json(response);
      return;
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }

  // @Get()
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard)
  // @ApiQuery({ name: 'storeId', required: true })
  // @ApiQuery({ name: 'cursor', required: false })
  // @ApiQuery({ name: 'previousCursor', required: false })
  // @ApiQuery({ name: 'limit', required: false })
  // @ApiQuery({ name: 'orderBy', required: false })
  // @ApiQuery({ name: 'searchKey', required: false })
  // async getMembers(
  //   @Req() req: any,
  //   @Res() res: Response,
  //   @Query('storeId') storeId: string,
  //   @Query('cursor') cursor: string,
  //   @Query('previousCursor') previousCursor: string,
  //   @Query('searchKey') searchKey: string,
  //   @Query('orderBy') orderBy: string,
  //   @Query('limit') limit: number,
  // ) {
  //   try {
  //     console.log('get Members');
  //     const user = req.user;
  //     const response = await this.memberRpcService
  //       .sendRequest(MessagePatternEnum.GET_MEMBERS, {
  //         user,
  //         storeId,
  //         limit: limit || 10,
  //         cursor,
  //         previousCursor,
  //         orderBy,
  //         searchKey,
  //       })
  //       .toPromise();

  //     console.log('response:', response);
  //     res
  //       .status(response.status_code)
  //       .json({ ...response, status_code: undefined });
  //     return;
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //     return;
  //   }
  // }
}
