import { IsString } from 'class-validator'

export class AddConvertDateUTC {
  @IsString()
    startDate: string

  @IsString()
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
