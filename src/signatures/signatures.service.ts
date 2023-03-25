import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { replaceMultiple } from 'src/utils/replacer';
import { Repository } from 'typeorm';
import { UserDataService } from '../user-data/user-data.service';
import { Signature } from './signature.entity';

@Injectable()
export class SignaturesService {
  constructor(
    @InjectRepository(Signature)
    private signaturesRepository: Repository<Signature>,
    private userDataService: UserDataService,
  ) { }

  async findSignatureByUserId(userId: number): Promise<{ html: string }> {
    const signature = await this.signaturesRepository.findOneBy({ userId });

    return { html: signature?.signature || '' };
  }

  async createOrUpdateSignature(userId: number): Promise<{ html: string }> {
    const user = await this.userDataService.findUserDataByUserId(userId);

    if (!user) {
      throw new BadRequestException('Please add user details first');
    }

    const { email, fullName, company, title, address, phone, template } = user;

    const mapReplaceObj = {
      '{email}': email,
      '{fullName}': fullName,
      '{company}': company,
      '{title}': title,
      '{address}': address,
      '{phone}': phone,
    };

    const signatureString = replaceMultiple(template.layout, mapReplaceObj);

    const signature = await this.signaturesRepository.findOneBy({ userId });

    if (!signature) {
      await this.signaturesRepository.insert({
        userId,
        signature: signatureString,
      });
    } else {
      await this.signaturesRepository.update(
        { id: signature.id },
        {
          userId,
          signature: signatureString,
        },
      );
    }

    return { html: signatureString };
  }
}
