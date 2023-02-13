import { Controller, Post, Patch, Body, Param } from '@nestjs/common'
import { User_Program_Session } from '@prisma/client'
import { AddUserProgramDto } from './dto/add-user-program.dto'
import { UpdateUserProgramDto } from './dto/update-user-program.dto'
import { UserProgramsService } from './userPrograms.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('user-program-sessions')
@Controller('user-program-session')
export class UserProgramsController {
  constructor (private readonly userProgramService: UserProgramsService) {}
  @Post()
  @ApiOperation({
    summary: 'Cria um novo programa de sessão do usuário.'
  })
  async create (@Body() dto: AddUserProgramDto): Promise<User_Program_Session> {
    return await this.userProgramService.create(dto)
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Corrige um programa de sessão do usuário.'
  })
  async update (@Param('id') id: string, @Body() dto: UpdateUserProgramDto): Promise<User_Program_Session> {
    return await this.userProgramService.update(id, dto)
  }
}
