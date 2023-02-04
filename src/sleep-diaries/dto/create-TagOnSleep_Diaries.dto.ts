import { IsString } from 'class-validator'

export class CreateTagOnSleepDiariesDto {
  @IsString()
    sleep_tag: string

  @IsString()
    sleep_DiariesId: string
}
