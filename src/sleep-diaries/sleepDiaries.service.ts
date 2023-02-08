import { Injectable } from '@nestjs/common'
import { Sleep_Diaries } from '@prisma/client'
import { CreateCompanyDto } from 'src/company/dto/createCompany.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { RelationDto } from 'src/utils/generics/relations.dto'
import { AddSleepDiariesWithTagsDto } from './dto/add-sleepDiaries.dto'
import { SleepDiariesWithoutTagsDto } from './dto/sleepDiariesWithoutTags.dto'
import { UpdateSleepDiariesDto } from './dto/updateSleepDiaries.dto'

@Injectable()
export class SleepDiariesService {
  constructor (private readonly prisma: PrismaService) {}

  async create (dto: AddSleepDiariesWithTagsDto): Promise<Sleep_Diaries | null> {
    const user: RelationDto<CreateUserDto> = { connect: { id: dto.user_id } }
    const company: RelationDto<CreateCompanyDto> = { connect: { id: dto.company_id } }
    const tags = dto.tags
    delete dto.tags
    delete dto.company_id
    delete dto.user_id
    const sleepDiariesDto: SleepDiariesWithoutTagsDto = dto
    const sleep_DiariesId = (await this.prisma.sleep_Diaries.create({ data: { ...sleepDiariesDto, user, company } })).id

    tags?.map(async (e: { sleep_tag: string }) => {
      const sleep_tagId = (
        await this.prisma.tag.findUnique({
          where: {
            sleep_tag: e.sleep_tag
          }
        })
      )?.id
      if (sleep_tagId) {
        await this.prisma.tagOnSleep_Diaries.create({ data: { sleep_tagId, sleep_DiariesId } })
      } else {
        console.log(`A tag ${e.sleep_tag} não está cadastrada.`)
      }
    })

    return await this.prisma.sleep_Diaries.findUnique({
      where: {
        id: sleep_DiariesId
      }
    })
  }

  async update (id: string, dto: UpdateSleepDiariesDto): Promise<Sleep_Diaries> {
    return await this.prisma.sleep_Diaries.update({
      where: { id },
      data: { ...dto }
    })
  }
}
