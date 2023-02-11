import { Injectable } from '@nestjs/common'
import { ICheckWeekOrMonth, ConvertDateUTC, IPeriodBeginningMiddleEnd, AddConvertDateUTC } from './commonMethods.interfaces'

@Injectable()
export class CommonMethodsService {
  convertDateUTC ({ startDate, finalDate }: AddConvertDateUTC): ConvertDateUTC {
    const startDateSplit = startDate.split('-')
    const finalDateSplit = finalDate.split('-')
    const start = Date.UTC(+startDateSplit[0], +startDateSplit[1] - 1, +startDateSplit[2])
    const final = Date.UTC(+finalDateSplit[0], +finalDateSplit[1] - 1, +finalDateSplit[2])

    return {
      start,
      final
    }
  }

  private checkWeekOrMonth ({ startDate, finalDate }: AddConvertDateUTC): ICheckWeekOrMonth {
    const convertDateUTC = this.convertDateUTC({ startDate, finalDate })
    const startDateUTC = convertDateUTC.start
    const finalDateUTC = convertDateUTC.final
    const oneDayUTC = 86400000
    const weekOrMonth = finalDateUTC - startDateUTC === oneDayUTC * 6 ? 'week' : 'month'

    return {
      weekOrMonth,
      startDateUTC,
      finalDateUTC,
      oneDayUTC
    }
  }

  private weeklyPeriod (startDateUTC: number, finalDateUTC: number, oneDayUTC: number): IPeriodBeginningMiddleEnd {
    const beginning = { startPeriod: startDateUTC, endPeriod: startDateUTC + oneDayUTC * 2 }
    const middle = { startPeriod: startDateUTC + oneDayUTC * 2, endPeriod: startDateUTC + oneDayUTC * 4 }
    const end = { startPeriod: startDateUTC + oneDayUTC * 4, endPeriod: finalDateUTC }
    return {
      beginning,
      middle,
      end
    }
  }

  private monthlyPeriod (startDateUTC: number, finalDateUTC: number, oneDayUTC: number): IPeriodBeginningMiddleEnd {
    const beginning = { startPeriod: startDateUTC, endPeriod: startDateUTC + oneDayUTC * 9 }
    const middle = { startPeriod: startDateUTC + oneDayUTC * 9, endPeriod: startDateUTC + oneDayUTC * 18 }
    const end = { startPeriod: startDateUTC + oneDayUTC * 18, endPeriod: finalDateUTC }
    return {
      beginning,
      middle,
      end
    }
  }

  divideThreePeriods ({ startDate, finalDate }: AddConvertDateUTC): IPeriodBeginningMiddleEnd | undefined {
    const data = this.checkWeekOrMonth({ startDate, finalDate })

    switch (data.weekOrMonth) {
      case 'week':
        return this.weeklyPeriod(data.startDateUTC, data.finalDateUTC, data.oneDayUTC)
      case 'month':
        return this.monthlyPeriod(data.startDateUTC, data.finalDateUTC, data.oneDayUTC)
    }
  }
}
