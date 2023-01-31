import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class RatingsService {
  constructor (private readonly prisma: PrismaService) {}
}
