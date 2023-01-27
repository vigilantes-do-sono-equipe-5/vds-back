import {
  BadRequestException,
  InternalServerErrorException
} from '@nestjs/common'
import { IException } from './I_exception'

export enum EExceptions {
  InvalidData,
  DatabaseException,
  NotFoundData
}

export function HandleError ({ message, exception }: IException): void {
  if (
    exception === EExceptions.InvalidData ||
    exception === EExceptions.NotFoundData
  ) {
    throw new BadRequestException(message ?? 'Invalid data')
  }
  if (exception === EExceptions.DatabaseException) {
    throw new InternalServerErrorException(
      message ?? 'Not found in database'
    )
  }
}
