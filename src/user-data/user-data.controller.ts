import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/jwt.guard';
import { UserDataService } from './user-data.service';

@Controller('user-data')
export class UserDataController {
  constructor(private readonly userDataService: UserDataService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  createUserData(@Request() req, @Body() userData) {
    return this.userDataService.createOrUpdateUserData({
      ...userData,
      userId: req.user.userId,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getSignature(@Request() req) {
    return this.userDataService.findUserDataByUserId(req.user.userId);
  }
}
