import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../jwt.guard';
import { SignaturesService } from './signatures.service';

@Controller('signatures')
export class SignaturesController {
  constructor(private readonly signaturesService: SignaturesService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  createSignature(@Request() req) {
    return this.signaturesService.createOrUpdateSignature(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getSignature(@Request() req) {
    return this.signaturesService.findSignatureByUserId(req.user.userId);
  }
}
