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
      relations: ['template'],
    });

    return userData;
  }

  async createOrUpdateUserData(userData): Promise<UserData> {
    const data = new UserData();

    data.userId = userData.userId;
    data.address = userData.address;
    data.company = userData.company;
    data.email = userData.email;
    data.fullName = userData.fullName;
    data.phone = userData.phone;
    data.title = userData.title;
    data.template = userData.template;

    const user = await this.findUserDataByUserId(userData.userId);

    if (!user) {
      this.userDataRepository.insert(data);

      return this.findUserDataByUserId(userData.userId);
    }

    await this.userDataRepository.update(
      {
        userId: data.userId,
      },
      { ...data },
    );

    return this.findUserDataByUserId(userData.userId);
  }
}
