import { EExceptions } from './exceptionsHelper'

export class Exception {
  constructor (readonly exception: EExceptions, readonly message?: string) {}
}
