export interface IConvertDateUTC {
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
