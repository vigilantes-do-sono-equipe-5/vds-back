import { IsArray, IsBoolean, IsDate, IsNumber, IsString } from 'class-validator'
import { Tag } from './tag.dto'

export class SleepDiaries {
  @IsBoolean()
    autogenic_training?: boolean | null

  @IsBoolean()
    behavior_activation?: boolean | null

  @IsBoolean()
    challenge_catastrophic_thinking?: boolean

  @IsNumber()
    concentration?: number

  @IsDate()
    created_at: Date

  @IsDate()
    date: Date

  @IsBoolean()
    deep_breath?: boolean

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

  @IsBoolean()
    gratitude?: boolean

  @IsNumber()
    humor?: number

  @IsBoolean()
    imagery?: boolean

  @IsBoolean()
    light_therapy?: boolean

  @IsBoolean()
    meditation?: boolean

  @IsBoolean()
    paradoxical_intention?: boolean

  @IsBoolean()
    parking_lot?: boolean

  @IsBoolean()
    pmr?: boolean

  @IsNumber()
    relationships?: number

  @IsBoolean()
    stimulus_control?: boolean

  @IsArray()
    tags: Tag[]

  @IsBoolean()
    thought_block?: boolean

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
