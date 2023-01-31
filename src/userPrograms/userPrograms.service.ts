import { Injectable } from '@nestjs/common'
import { User_Program_Session } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { UpdateUserProgramDto } from './dto/update-user-program.dto'
import { AddUserProgramDto } from './dto/add-user-program.dto'

@Injectable()
export class UserProgramsService {
  constructor (private readonly prisma: PrismaService) {}

  async create (dto: AddUserProgramDto): Promise<User_Program_Session> {
    return await this.prisma.user_Program_Session.create({ data: { ...dto } })
  }

  async update (
    id: string,
    dto: UpdateUserProgramDto
  ): Promise<User_Program_Session> {
    return await this.prisma.user_Program_Session.update({
      where: { id },
      data: { ...dto }
    })
  }
}
