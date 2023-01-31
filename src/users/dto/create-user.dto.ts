import { IsNumber } from 'class-validator'
import { AddGadDto } from '../../gads/dto/add-gad.dto'
import { AddIsiDto } from '../../isis/dto/add-isi.dto'
import { AddPhqDto } from '../../phqs/dto/add-phq.dto'
import { AddProductivityDto } from '../../productivitys/dto/add-productivity.dto'
import { AddRatingsDto } from '../../ratings/dto/add-ratings.dto'
import { AddSleepDiariesDto } from '../../sleep-diaries/dto/add-sleep-diaries.dto'
import { UserProgramDto } from '../../userPrograms/dto/add-user-program.dto'

export class CreateUserDto {
  @IsNumber()
    points: number

  @IsNumber()
    day_goal: number

  @IsNumber()
    night_goal: number

  user_program_session: UserProgramDto[]
  sleep_diaries: AddSleepDiariesDto[]
  ratings: AddRatingsDto[]
  isi: AddIsiDto[]
  gad: AddGadDto[]
  phq: AddPhqDto[]
  productivity: AddProductivityDto[]
}
