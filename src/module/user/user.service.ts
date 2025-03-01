import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@/module/user/dto/create-user.dto';
import { UpdateUserDto } from '@/module/user/dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }
  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      data: updateUserDto,
      where: { id }
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
