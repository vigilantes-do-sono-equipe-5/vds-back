import { Injectable } from '@nestjs/common'
import { Company, Sleep_Diaries, User_Program_Session, User } from '@prisma/client'
import { AddConvertDateUTC } from 'src/commonMethods/commonMethods.interfaces'
import { CommonMethodsService } from 'src/commonMethods/commonMethods.service'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateCompanyDto } from './dto/createCompany.dto'
import { UpdateCompanyDto } from './dto/updateCompany.dto'

@Injectable()
export class CompanyService {
  constructor (private readonly prisma: PrismaService, private readonly commonMethodsService: CommonMethodsService) {}

  async create (dto: CreateCompanyDto): Promise<Company> {
    return await this.prisma.company.create({ data: { ...dto } })
  }

  async update (id: string, dto: UpdateCompanyDto): Promise<Company> {
    return await this.prisma.company.update({ where: { id }, data: { ...dto } })
  }

  async findAll (): Promise<
  Array<{
    id: string
    name: string
    employees: number
    activeEmployees: number
  }>
  > {
    const companyList = await this.prisma.company.findMany({ include: { users: true } })
    return companyList.map(
      (
        e: Company & {
          users: User[]
        }
      ) => {
        return {
          id: e.id,
          name: e.name,
          employees: e.employees,
          activeEmployees: e.users.length
        }
      }
    )
  }

  async mainNumbers (
    id: string,
    date: AddConvertDateUTC
  ): Promise<{
      userProgramSession: number
      sleepDiaries: number
      techniques: number
    }> {
    const dateUTC = this.commonMethodsService.convertDateUTC(date)
    const companyAllList = await this.prisma.company.findMany({ where: { id }, include: { User_Program_Session: true, Sleep_Diarie: true } })

    const userProgramSessionFilter = companyAllList[0].User_Program_Session.filter((e: User_Program_Session): boolean => {
      const date = new Date(e.created_at.slice(0, 10))
      return dateUTC ? +date >= dateUTC.start && +date < dateUTC.final : false
    })

    const sleepDiarieListFilter = companyAllList[0].Sleep_Diarie.filter((e: Sleep_Diaries): boolean => {
      const date = new Date(e.created_at.slice(0, 10))
      return dateUTC ? +date >= dateUTC.start && +date < dateUTC.final : false
    })

    const techniques = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    companyAllList[0].Sleep_Diarie.forEach((e: Sleep_Diaries) => {
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
    })

    return {
      userProgramSession: userProgramSessionFilter.length,
      sleepDiaries: sleepDiarieListFilter.length,
      techniques: techniques.reduce((a, b) => a + b, 0)
    }
  }

  async chosenGoals (id: string): Promise<{
    concentration: number
    energy: number
    relationships: number
    humor: number
  }> {
    const companyList = await this.prisma.company.findMany({ where: { id }, include: { users: { include: { sleep_Diaries: true } } } })
    const usersList = companyList[0].users
    const chosenGoalsUsers = usersList.map((e: User & {
      sleep_Diaries: Sleep_Diaries[]
    }) => {
      const chosenGoals = [0, 0, 0, 0]
      e.sleep_Diaries.forEach((e: Sleep_Diaries) => {
        chosenGoals[0] = e.concentration ? 1 : chosenGoals[0]
      })
      e.sleep_Diaries.forEach((e: Sleep_Diaries) => {
        chosenGoals[1] = e.energy ? 1 : chosenGoals[1]
      })
      e.sleep_Diaries.forEach((e: Sleep_Diaries) => {
        chosenGoals[2] = e.relationships ? 1 : chosenGoals[2]
      })
      e.sleep_Diaries.forEach((e: Sleep_Diaries) => {
        chosenGoals[3] = e.humor ? 1 : chosenGoals[3]
      })
      return {
        concentration: chosenGoals[0],
        energy: chosenGoals[1],
        relationships: chosenGoals[2],
        humor: chosenGoals[3]
      }
    })
    const chosenGoals = [0, 0, 0, 0]
    chosenGoalsUsers.forEach((e: {
      concentration: number
      energy: number
      relationships: number
      humor: number
    }) => {
      chosenGoals[0] += e.concentration === 1 ? 1 : 0
      chosenGoals[1] += e.energy === 1 ? 1 : 0
      chosenGoals[2] += e.relationships === 1 ? 1 : 0
      chosenGoals[3] += e.humor === 1 ? 1 : 0
    })

    return {
      concentration: chosenGoals[0],
      energy: chosenGoals[1],
      relationships: chosenGoals[2],
      humor: chosenGoals[3]
    }
  }
}
