import { Tag } from './tag.dto'

export class SleepDiaries {
  autogenic_training?: boolean
  behavior_activation?: boolean
  challenge_catastrophic_thinking?: boolean
  concentration?: number
  created_at: Date
  date: Date
  deep_breath?: boolean
  energy?: number
  get_up: string
  go_bed: string
  go_sleep: string
  grade?: number
  gratitude?: boolean
  humor?: number
  imagery?: boolean
  light_therapy?: boolean
  meditation?: boolean
  paradoxical_intention?: boolean
  parking_lot?: boolean
  pmr?: boolean
  relationships?: number
  stimulus_control?: boolean
  tags: Tag[]
  thought_block?: boolean
  time_to_sleep: number
  timezone: number
  wake_up: string
  wake_up_count: number
  wake_up_duration: number
}
