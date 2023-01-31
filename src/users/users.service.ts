import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor (private readonly prisma: PrismaService) {}

  async create (dto: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({ data: { ...dto } })
  }

  async update (id: string, dto: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({
      where: { id },
      data: { ...dto }
    })
  }
}
