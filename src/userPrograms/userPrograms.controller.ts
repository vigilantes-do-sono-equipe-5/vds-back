import { Controller, Post, Patch, Body, Param } from '@nestjs/common'
import { User_Program_Session } from '@prisma/client'
import { AddUserProgramDto } from './dto/add-user-program.dto'
import { UpdateUserProgramDto } from './dto/update-user-program.dto'
import { UserProgramsService } from './userPrograms.service'

@Controller()
export class UserProgramsController {
  constructor (private readonly nameService: UserProgramsService) {}
  @Post()
  async create (@Body() dto: AddUserProgramDto): Promise<User_Program_Session> {
    return await this.nameService.create(dto)
  }

  @Patch(':id')
  async update (@Param('id') id: string, @Body() dto: UpdateUserProgramDto): Promise<User_Program_Session> {
    return await this.nameService.update(id, dto)
  }
}
