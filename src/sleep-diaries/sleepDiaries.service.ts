import { Injectable } from '@nestjs/common'
import { Sleep_Diaries, Tag, TagOnSleep_Diaries } from '@prisma/client'
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

  async sleepInterference (id: string): Promise<{
    sleepInterference: {
      nicotine: number
      nap: number
      exercise: number
      caffeine: number
      partner: number
      pain: number
      medicine: number
      noise: number
      bathroom: number
      meal: number
      temperature: number
      alcohol: number
      light: number
      dream: number }
  }> {
    const tagOnSleepDiaries = await this.prisma.tagOnSleep_Diaries.findMany({ where: { companyId: id }, include: { tag: true } })
    const sleepInterferenceList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const sleepTags = [
      'nicotine',
      'nap',
      'exercise',
      'caffeine',
      'partner',
      'pain',
      'medicine',
      'noise',
      'bathroom',
      'meal',
      'temperature',
      'alcohol',
      'light',
      'dream'
    ]

    tagOnSleepDiaries.forEach(
      (
        e: TagOnSleep_Diaries & {
          tag: Tag
        }
      ) => {
        for (let i = 0; i < sleepTags.length; i++) {
          sleepInterferenceList[i] += e.tag.sleep_tag === sleepTags[i] ? 1 : 0
        }
      }
    )
    return {
      sleepInterference: {
        nicotine: sleepInterferenceList[0],
        nap: sleepInterferenceList[1],
        exercise: sleepInterferenceList[2],
        caffeine: sleepInterferenceList[3],
        partner: sleepInterferenceList[4],
        pain: sleepInterferenceList[5],
        medicine: sleepInterferenceList[6],
        noise: sleepInterferenceList[7],
        bathroom: sleepInterferenceList[8],
        meal: sleepInterferenceList[9],
        temperature: sleepInterferenceList[10],
        alcohol: sleepInterferenceList[11],
        light: sleepInterferenceList[12],
        dream: sleepInterferenceList[13]
      }
    }
  }

  async moreAppliedTechniques (id: string): Promise<{
    moreAppliedTechniques: { autogenic_training: number
      behavior_activation: number
      challenge_catastrophic_thinking: number
      deep_breath: number
      gratitude: number
      imagery: number
      light_therapy: number
      meditation: number
      paradoxical_intention: number
      parking_lot: number
      pmr: number
      stimulus_control: number
      thought_block: number
    }
  }> {
    const sleepDiariesList = await this.prisma.sleep_Diaries.findMany({ where: { company_id: id } })
    const techniques = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    sleepDiariesList.forEach(
      (
        e: Sleep_Diaries
      ) => {
        techniques[0] += e.autogenic_training === true ? 1 : 0
        techniques[1] += e.behavior_activation === true ? 1 : 0
        techniques[2] += e.challenge_catastrophic_thinking === true ? 1 : 0
        techniques[3] += e.deep_breath === true ? 1 : 0
        techniques[4] += e.gratitude === true ? 1 : 0
        techniques[5] += e.imagery === true ? 1 : 0
        techniques[6] += e.light_therapy === true ? 1 : 0
        techniques[7] += e.meditation === true ? 1 : 0
        techniques[8] += e.paradoxical_intention === true ? 1 : 0
        techniques[9] += e.parking_lot === true ? 1 : 0
        techniques[10] += e.pmr === true ? 1 : 0
        techniques[11] += e.stimulus_control === true ? 1 : 0
        techniques[12] += e.thought_block === true ? 1 : 0
      }
    )
    return {
      moreAppliedTechniques: {
        autogenic_training: techniques[0],
        behavior_activation: techniques[1],
        challenge_catastrophic_thinking: techniques[2],
        deep_breath: techniques[3],
        gratitude: techniques[4],
        imagery: techniques[5],
        light_therapy: techniques[6],
        meditation: techniques[7],
        paradoxical_intention: techniques[8],
        parking_lot: techniques[9],
        pmr: techniques[10],
        stimulus_control: techniques[11],
        thought_block: techniques[12]
      }
    }
  }
}
