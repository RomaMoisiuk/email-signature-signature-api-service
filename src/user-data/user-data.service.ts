import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserData } from './user-data.entity';

@Injectable()
export class UserDataService {
  constructor(
    @InjectRepository(UserData)
    private userDataRepository: Repository<UserData>,
  ) { }

  async findUserDataByUserId(userId: number): Promise<UserData> {
    const userData = await this.userDataRepository.findOne({
      where: { userId },
      relations: ['template']
    });

    return userData;
  }

  createOrUpdateUserData(userData: UserData): Promise<UserData> {
    return this.userDataRepository.save({ ...userData });
  }
}
