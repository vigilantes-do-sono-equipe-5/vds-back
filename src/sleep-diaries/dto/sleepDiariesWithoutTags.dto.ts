import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNumber, IsOptional, IsString, ValidateIf } from 'class-validator'

export class SleepDiariesWithoutTagsDto {
  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    autogenic_training?: boolean | null

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    behavior_activation?: boolean | null

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    challenge_catastrophic_thinking?: boolean | null

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  @ValidateIf((_, value) => value !== null)
    concentration?: number | null

  @IsString()
  @ApiProperty()
    date: string

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    deep_breath?: boolean | null

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  @ValidateIf((_, value) => value !== null)
    energy?: number | null

  @IsString()
  @ApiProperty()
    get_up: string

  @IsString()
  @ApiProperty()
    go_bed: string

  @IsString()
  @ApiProperty()
    go_sleep: string

  @IsNumber()
  @ApiProperty()
  @ValidateIf((_, value) => value !== null)
    grade?: number | null

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    gratitude?: boolean | null

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  @ValidateIf((_, value) => value !== null)
    humor?: number | null

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    imagery?: boolean | null

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    light_therapy?: boolean | null

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    meditation?: boolean | null

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    paradoxical_intention?: boolean | null

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    parking_lot?: boolean | null

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    pmr?: boolean | null

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  @ValidateIf((_, value) => value !== null)
    relationships?: number | null

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    stimulus_control?: boolean | null

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    thought_block?: boolean | null

  @IsNumber()
  @ApiProperty()
    time_to_sleep: number

  @IsNumber()
  @ApiProperty()
    timezone: number

  @IsString()
  @ApiProperty()
    wake_up: string

  @IsNumber()
  @ApiProperty()
    wake_up_count: number

  @IsNumber()
  @ApiProperty()
    wake_up_duration: number

  @IsString()
  @ApiProperty()
    created_at: string
}
