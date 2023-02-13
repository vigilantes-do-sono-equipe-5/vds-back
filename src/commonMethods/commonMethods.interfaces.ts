import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class AddConvertDateUTC {
  @ApiProperty({
    description: 'Primeiro valor da data que será verificada pela API, podendo ser o início da semana ou mês',
    example: '2022-10-01'
  })
  @IsString()
    startDate: string

  @IsString()
  @ApiProperty({
    description: 'Segundo valor da data que será verificada pela API, podendo ser o final da semana ou um mês',
    example: '2022-10-31'
  })
    finalDate: string
}
export class ConvertDateUTC {
  start: number
  final: number
}

export interface ICheckWeekOrMonth {
  weekOrMonth: string
  startDateUTC: number
  finalDateUTC: number
  oneDayUTC: number
}

export interface IPeriodBeginningMiddleEnd {
  beginning: {
    startPeriod: number
    endPeriod: number
  }
  middle: {
    startPeriod: number
    endPeriod: number
  }
  end: {
    startPeriod: number
    endPeriod: number
  }
}
