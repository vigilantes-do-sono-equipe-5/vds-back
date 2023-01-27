import { ValidateIf } from 'class-validator'

type TTagDto =
   'caffeine'
   | 'noise'
   | 'pain'
   | 'exercise'
   | 'light'
   | 'medicine'
   | 'nicotine'
   | 'partner'
   | 'nap'
   | 'temperature'
   | 'meal'
   | 'bathroom'
   | 'alcohol'
   | 'bathroom '
   | 'dream'

const TAGS = [
  'caffeine',
  'noise',
  'pain',
  'exercise',
  'light',
  'medicine',
  'nicotine',
  'partner',
  'nap',
  'temperature',
  'meal',
  'bathroom',
  'alcohol',
  'bathroom ',
  'dream'
]

export class TagDto {
  @ValidateIf((_, value) => TAGS.includes(value))
    sleep_tag: TTagDto
}
