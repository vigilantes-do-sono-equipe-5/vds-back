import { IsOptional, IsString } from 'class-validator'

export class CreateTagDto {
  @IsString
    sleep_tag: string

  @IsOptional()
  @IsString()
    sleep_DiariesId?: string
}
