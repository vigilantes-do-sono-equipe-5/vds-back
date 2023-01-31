import { PartialType } from '@nestjs/mapped-types'
import { AddUserProgramDto } from './add-user-program.dto'

export class UpdateUserProgramDto extends PartialType(AddUserProgramDto) {}
