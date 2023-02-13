import { IsArray, IsOptional, IsString } from 'class-validator'
import { SleepDiariesWithTagsDto } from './sleepDiariesWithTags.dto'
import { SleepDiariesWithoutTagsDto } from './sleepDiariesWithoutTags.dto'
import { ApiProperty } from '@nestjs/swagger'

export class AddSleepDiariesDto extends SleepDiariesWithoutTagsDto {
  @ApiProperty()
  @IsString()
    user_id?: string

  @IsString()
  @ApiProperty()
    company_id?: string
}

export class AddSleepDiariesWithTagsDto extends AddSleepDiariesDto implements SleepDiariesWithTagsDto {
  @IsOptional()
  @ApiProperty()
  @IsArray()
    tags?: Array<{ sleep_tag: string }>
}
