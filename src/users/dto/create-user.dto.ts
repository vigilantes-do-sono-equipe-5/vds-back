import { IsNumber } from 'class-validator'
import { GadDto } from './gad.dto'
import { IsiDto } from './isi.dto'
import { PhqDto } from './phq.dto'
import { ProductivityDto } from './productivity.dto'
import { RatingsDto } from './ratings.dto'
import { SleepDiariesDto } from './sleep-diaries.dto'
import { UserProgramDto } from './user-program.dto'

export class CreateUserDto {
  @IsNumber()
    points: number

  @IsNumber()
    day_goal: number

  @IsNumber()
    night_goal: number

  user_program_session: UserProgramDto[]
  sleep_diaries: SleepDiariesDto[]
  ratings: RatingsDto[]
  isi: IsiDto[]
  gad: GadDto[]
  phq: PhqDto[]
  productivity: ProductivityDto[]
}
