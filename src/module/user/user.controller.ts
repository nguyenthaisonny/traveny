import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { UserService } from '@/module/user/user.service';
import { CreateUserDto } from '@/module/user/dto/create-user.dto';
import { UpdateUserDto } from '@/module/user/dto/update-user.dto';
import { ResponseMessage } from '@/decorators/customs';
import { AccessTokenGuard } from '@/common/accessToken.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @UseGuards(AccessTokenGuard)
  @ResponseMessage("Create user.")
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ResponseMessage("Get all users.")
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ResponseMessage("Get one user.")
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  @ResponseMessage("Update user.")
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')

  @ResponseMessage("Delete user.")
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
