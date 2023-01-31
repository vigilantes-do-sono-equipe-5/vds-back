import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf
} from 'class-validator'
import { AddTagDto } from '../../tags/dto/add-tag.dto'

export class AddSleepDiariesDto {
  @IsOptional()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    autogenic_training?: boolean | null

  @IsOptional()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    behavior_activation?: boolean | null

  @IsOptional()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    challenge_catastrophic_thinking?: boolean | null

  @IsOptional()
  @IsNumber()
    concentration?: number

  @IsDate()
    created_at: Date

  @IsDate()
    date: Date

  @IsOptional()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    deep_breath?: boolean | null

  @IsOptional()
  @IsNumber()
    energy?: number

  @IsString()
    get_up: string

  @IsString()
    go_bed: string

  @IsString()
    go_sleep: string

  @IsNumber()
    grade?: number

  @IsOptional()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    gratitude?: boolean | null

  @IsOptional()
  @IsNumber()
    humor?: number

  @IsOptional()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    imagery?: boolean | null

  @IsOptional()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    light_therapy?: boolean | null

  @IsOptional()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    meditation?: boolean | null

  @IsOptional()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    paradoxical_intention?: boolean | null

  @IsOptional()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    parking_lot?: boolean | null

  @IsOptional()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    pmr?: boolean | null

  @IsOptional()
  @IsNumber()
    relationships?: number

  @IsOptional()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    stimulus_control?: boolean | null

  @IsArray()
    tags: AddTagDto[]

  @IsOptional()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    thought_block?: boolean | null

  @IsNumber()
    time_to_sleep: number

  @IsNumber()
    timezone: number

  @IsString()
    wake_up: string

  @IsNumber()
    wake_up_count: number

  @IsNumber()
    wake_up_duration: number
}
