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
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { StoresRpcService } from './stores.rpc.service';
import { MessagePatternEnum } from './enums/message-patterns.enum';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { Response } from 'express';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { CreateBranchDto } from './dto/create-branch.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('stores')
export class StoresController {
  constructor(private readonly storesRpcService: StoresRpcService) {}

  @ApiTags('stores')
  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Create a new store' })
  @ApiResponse({
    status: 201,
    description: 'The store has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async create(
    @Body() createStoreDto: CreateStoreDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const response: any = await this.storesRpcService
        .sendRequest(MessagePatternEnum.CREATE_STORE, {
          createStoreDto,
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

  @ApiTags('stores')
  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async findOne(
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.storesRpcService
        .sendRequest(MessagePatternEnum.GET_STORE, { id, user })
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

  @ApiTags('stores')
  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateStoreDto: UpdateStoreDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.storesRpcService
        .sendRequest(MessagePatternEnum.UPDATE_STORE, {
          id,
          updateStoreDto,
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

  @ApiTags('stores')
  @Delete('/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: string, @Req() req: any, @Res() res: Response) {
    try {
      const user = req.user;
      const response = await this.storesRpcService
        .sendRequest(MessagePatternEnum.DELETE_STORE, { id, user })
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

  // @ApiTags('stores')
  // @Get()
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard)
  // async findAll(@Req() req: any, @Res() res: Response) {
  //   try {
  //     const user = req.user;
  //     const response = await this.storesRpcService
  //       .sendRequest(MessagePatternEnum.GET_STORES, { user })
  //       .toPromise();
  //     res
  //       .status(response.status_code)
  //       .json({ ...response, status_code: undefined });
  //     return;
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //     return;
  //   }
  // }

  @ApiTags('stores/branches')
  @Post('branches')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async addBranch(
    @Body() createBranchDto: CreateBranchDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.storesRpcService
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

  @ApiTags('stores/branches')
  @Patch('branches/:id')
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
      const response = await this.storesRpcService
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

  @ApiTags('stores/branches')
  @Delete('branches/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async removeBranch(
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.storesRpcService
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

  @ApiTags('stores/branches')
  @Get('branches/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async getBranch(
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.storesRpcService
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

  @ApiTags('stores/branches')
  @Get('branches')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiQuery({ name: 'storeId', required: true })
  @ApiQuery({ name: 'cursor', required: false })
  @ApiQuery({ name: 'previousCursor', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @ApiQuery({ name: 'searchKey', required: false })
  async getBranches(
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
      const response = await this.storesRpcService
        .sendRequest(MessagePatternEnum.GET_BRANCHES, {
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

  @ApiTags('stores/products')
  @Post('products')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async addProduct(
    @Body() createProductDto: CreateProductDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.storesRpcService
        .sendRequest(MessagePatternEnum.CREATE_PRODUCT, {
          createProductDto,
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

  @ApiTags('stores/products')
  @Patch('products/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: CreateProductDto,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.storesRpcService
        .sendRequest(MessagePatternEnum.UPDATE_PRODUCT, {
          id,
          updateProductDto,
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

  @ApiTags('stores/products')
  @Get('products')
  @ApiBearerAuth()
  @ApiQuery({ name: 'storeId', required: true })
  @ApiQuery({ name: 'cursorId', required: false })
  @ApiQuery({ name: 'previousCursorId', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'orderBy', required: false })
  @ApiQuery({ name: 'searchKey', required: false })
  @UseGuards(AuthGuard)
  async getProducts(
    @Req() req: any,
    @Res() res: Response,
    @Query('storeId') storeId: string,
    @Query('cursorId') cursorId: string,
    @Query('previousCursorId') previousCursorId: string,
    @Query('searchKey') searchKey: string,
    @Query('orderBy') orderBy: string,
    @Query('limit') limit: number,
  ) {
    try {
      const user = req.user;
      const response = await this.storesRpcService
        .sendRequest(MessagePatternEnum.GET_PRODUCTS, {
          user,
          storeId,
          limit: limit || 10,
          cursorId,
          previousCursorId,
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

  @ApiTags('stores/products')
  @Delete('products/:id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async removeProduct(
    @Param('id') id: string,
    @Req() req: any,
    @Res() res: Response,
  ) {
    try {
      const user = req.user;
      const response = await this.storesRpcService
        .sendRequest(MessagePatternEnum.DELETE_PRODUCT, { id, user })
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

  // @ApiTags('stores/members')
  // @Post('members')
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard)
  // async addMember(
  //   @Body() createMemberDto: CreateMemberDto,
  //   @Req() req: any,
  //   @Res() res: Response,
  // ) {
  //   try {
  //     const user = req.user;
  //     const response = await this.storesRpcService
  //       .sendRequest(MessagePatternEnum.CREATE_MEMBER, {
  //         createMemberDto,
  //         user,
  //       })
  //       .toPromise();
  //     res
  //       .status(response.status_code)
  //       .json({ ...response, status_code: undefined });
  //     return;
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //     return;
  //   }
  // }

  // @ApiTags('stores/members')
  // @Delete('members/:id')
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard)
  // async removeMember(
  //   @Param('id') id: string,
  //   @Req() req: any,
  //   @Res() res: Response,
  // ) {
  //   try {
  //     const user = req.user;
  //     const response = await this.storesRpcService
  //       .sendRequest(MessagePatternEnum.DELETE_MEMBER, { id, user })
  //       .toPromise();
  //     res
  //       .status(response.status_code)
  //       .json({ ...response, status_code: undefined });
  //     return;
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //     return;
  //   }
  // }

  // @ApiTags('stores/members')
  // @Patch('members/:id')
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard)
  // async updateMember(
  //   @Param('id') id: string,
  //   @Body() updateMemberDto: UpdateMemberDto,
  //   @Req() req: any,
  //   @Res() res: Response,
  // ) {
  //   try {
  //     const user = req.user;
  //     const response = await this.storesRpcService
  //       .sendRequest(MessagePatternEnum.UPDATE_MEMBER, {
  //         id,
  //         updateMemberDto,
  //         user,
  //       })
  //       .toPromise();
  //     res
  //       .status(response.status_code)
  //       .json({ ...response, status_code: undefined });
  //     return;
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //     return;
  //   }
  // }

  // @ApiTags('stores/members')
  // @Get('members/:uid')
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard)
  // async getMember(
  //   @Param('uid') uid: string,
  //   @Req() req: any,
  //   @Res() res: Response,
  // ) {
  //   try {
  //     const user = req.user;
  //     const response = await this.storesRpcService
  //       .sendRequest(MessagePatternEnum.GET_MEMBER, { uid, user })
  //       .toPromise();
  //     res
  //       .status(response.status_code)
  //       .json({ ...response, status_code: undefined });
  //     return;
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //     return;
  //   }
  // }

  // @ApiTags('stores/members')
  // @Get('members')
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard)
  // async getMembers(@Req() req: any, @Res() res: Response) {
  //   try {
  //     console.log('get Members');
  //     const user = req.user;
  //     const response = await this.storesRpcService
  //       .sendRequest(MessagePatternEnum.GET_MEMBERS, { user })
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
