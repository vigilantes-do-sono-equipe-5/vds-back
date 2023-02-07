import { Injectable } from '@nestjs/common'
import { User_Program_Session } from '@prisma/client'
import { CreateCompanyDto } from 'src/company/dto/createCompany.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { RelationDto } from 'src/utils/generics/relations.dto'
import { AddUserProgramDto, AdduserProgramSessionWithoutRelation } from './dto/add-user-program.dto'
import { UpdateUserProgramDto } from './dto/update-user-program.dto'

@Injectable()
export class UserProgramsService {
  constructor (private readonly prisma: PrismaService) {}

  async create (dto: AddUserProgramDto): Promise<User_Program_Session> {
    const user: RelationDto<CreateUserDto> = { connect: { id: dto.user_id } }
    const company: RelationDto<CreateCompanyDto> = { connect: { id: dto.company_id } }
    delete dto.company_id
    delete dto.user_id
    const userProgramSessionDto: AdduserProgramSessionWithoutRelation = { ...dto, created_at: Date.now as unknown as string }
    return await this.prisma.user_Program_Session.create({ data: { ...userProgramSessionDto, user, company } })
  }

  async update (id: string, dto: UpdateUserProgramDto): Promise<User_Program_Session> {
    return await this.prisma.user_Program_Session.update({
      where: { id },
      data: { ...dto }
    })
  }
}
