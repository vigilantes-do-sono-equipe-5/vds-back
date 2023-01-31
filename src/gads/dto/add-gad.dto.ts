import { IsDate, IsNumber, Min, Max } from 'class-validator'

export class AddGadDto {
  @IsNumber()
  @Min(0)
  @Max(3)
    q1: number

  @IsNumber()
  @Min(0)
  @Max(3)
    q2: number

  @IsDate()
    created_at: Date
}
