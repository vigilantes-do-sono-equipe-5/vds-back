import { IsString } from 'class-validator'

export class CreateTagDto {
  @IsString()
    sleep_tag: string
}
