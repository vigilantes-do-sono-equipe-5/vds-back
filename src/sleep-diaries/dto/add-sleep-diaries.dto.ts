import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
  IsArray
} from 'class-validator'

export class AddSleepDiariesDto {
  @IsOptional()
  @IsString()
    user_id?: string

  @IsOptional()
  @IsString()
    company_id?: string

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
  @ValidateIf((_, value) => value !== null)
    concentration?: number | null

  @IsString()
    date: string

  @IsOptional()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    deep_breath?: boolean | null

  @IsOptional()
  @IsNumber()
  @ValidateIf((_, value) => value !== null)
    energy?: number | null

  @IsString()
    get_up: string

  @IsString()
    go_bed: string

  @IsString()
    go_sleep: string

  @IsNumber()
  @ValidateIf((_, value) => value !== null)
    grade?: number | null

  @IsOptional()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    gratitude?: boolean | null

  @IsOptional()
  @IsNumber()
  @ValidateIf((_, value) => value !== null)
    humor?: number | null

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
  @ValidateIf((_, value) => value !== null)
    relationships?: number | null

  @IsOptional()
  @IsBoolean()
  @ValidateIf((_, value) => value !== null)
    stimulus_control?: boolean | null

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

  @IsString()
    created_at: string

  @IsOptional()
  @IsArray()
    tags?: Array<{ sleep_tag: string }>
}
