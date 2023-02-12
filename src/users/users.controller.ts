import { Controller, Post, Patch, Body, Param } from '@nestjs/common'
import { User } from '@prisma/client'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersService } from './users.service'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('users')
@Controller()
export class UsersController {
  constructor (private readonly nameService: UsersService) {}
  @Post()
  async create (@Body() dto: CreateUserDto): Promise<User> {
    return await this.nameService.create(dto)
  }

  @Patch(':id')
  async update (@Param('id') id: string, @Body() dto: UpdateUserDto): Promise<User> {
    return await this.nameService.update(id, dto)
  }
}
