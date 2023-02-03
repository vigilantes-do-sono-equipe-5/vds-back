import { PrismaClient, Sleep_Diaries } from '@prisma/client'
import { CreateTagDto } from 'src/tags/dto/create-tag.dto'
import { AddGadDto } from '../src/gads/dto/add-gad.dto'
import { AddIsiDto } from '../src/isis/dto/add-isi.dto'
import { AddPhqDto } from '../src/phqs/dto/add-phq.dto'
import { AddProductivityDto } from '../src/productivitys/dto/add-productivity.dto'
import { AddRatingsDto } from '../src/ratings/dto/add-ratings.dto'
import { AddSleepDiariesDto } from '../src/sleep-diaries/dto/add-sleep-diaries.dto'
import { AddUserProgramDto } from '../src/userPrograms/dto/add-user-program.dto'
import * as data from '../src/utils/data/data.json'

const prisma = new PrismaClient()
const dataJson = [...data.user]
let qtdUsers = 0
let qtdUserProgramSessions = 0
let qtdSleepDiaries = 0
let qtdProductivity = 0
let qtdRatings = 0
let qtdIsi = 0
let qtdGad = 0
let qtdPhq = 0

const progress = (): void => {
  console.clear()
  console.log(`
      Sedding in progress...

      1 company cadastrado.
      ${qtdUsers} usuários cadastrados.
      ${qtdUserProgramSessions} user_program_sessions cadastrados.
      ${qtdSleepDiaries} sleep_diaries cadastrados.
      ${qtdProductivity} productivity cadastrados.
      ${qtdRatings} ratings cadastrados.
      ${qtdIsi} isi cadastrados.
      ${qtdGad} gad cadastrados.
      ${qtdPhq} phq cadastrados.
      `)
}

const main = async (): Promise<void> => {
  const data = {
    name: 'Empresa X'
  }
  const newCompany = await prisma.company.create({ data })
  console.log(`Company ${newCompany.name} criado.`)

  console.log(`Foram identificados ${dataJson.length} usuários.`)
  void dataJson.map(
    async ({
      points,
      day_goal,
      night_goal,
      user_program_sessions,
      sleep_diaries,
      productivity,
      ratings,
      isi,
      gad,
      phq
    }) => {
      const data = {
        points,
        day_goal,
        night_goal,
        company_id: newCompany.id
      }
      const newUser = await prisma.user.create({ data })
      qtdUsers += 1
      progress()

      qtdUserProgramSessions += user_program_sessions.length
      const dataUserProgramSessions = user_program_sessions.map(
        (e: AddUserProgramDto) => {
          return {
            ...e,
            user_id: newUser.id,
            company_id: newCompany.id
          }
        }
      )

      await prisma.user_Program_Session.createMany({
        data: dataUserProgramSessions
      })
      progress()

      qtdSleepDiaries += sleep_diaries.length
      sleep_diaries.map(
        async (e: AddSleepDiariesDto): Promise<Sleep_Diaries> => {
          let tags: Array<{ sleep_tag: string }> | [] = []
          e.tags ? (tags = e.tags) : (e.tags = [])
          delete e.tags

          const data = {
            ...e,
            user_id: newUser.id,
            company_id: newCompany.id
          }
          const sleepDiarie = await prisma.sleep_Diaries.create({ data })

          if (tags.length > 0) {
            let i: CreateTagDto
            for (i of tags) {
              const data = {
                sleep_tag: i.sleep_tag,
                sleep_DiariesId: sleepDiarie.id
              }
              await prisma.tag.create({ data })
            }
          }
          return sleepDiarie
        }
      )
      progress()

      qtdProductivity += productivity.length
      const dataProductivity = productivity.map((e: AddProductivityDto) => {
        return {
          ...e,
          user_id: newUser.id,
          company_id: newCompany.id
        }
      })
      await prisma.productivity.createMany({ data: dataProductivity })
      progress()

      qtdRatings += ratings.length
      const dataRatings = ratings.map((e: AddRatingsDto) => {
        return {
          ...e,
          user_id: newUser.id,
          company_id: newCompany.id
        }
      })
      await prisma.rating.createMany({ data: dataRatings })
      progress()

      qtdIsi += isi.length
      const dataIsi = isi.map((e: AddIsiDto) => {
        return {
          ...e,
          user_id: newUser.id,
          company_id: newCompany.id
        }
      })
      await prisma.isi.createMany({ data: dataIsi })
      progress()

      qtdGad += gad.length
      const dataGad = gad.map((e: AddGadDto) => {
        return {
          ...e,
          user_id: newUser.id,
          company_id: newCompany.id
        }
      })
      await prisma.gad.createMany({ data: dataGad })
      progress()

      qtdPhq += phq.length
      const dataPhq = phq.map((e: AddPhqDto) => {
        return {
          ...e,
          user_id: newUser.id,
          company_id: newCompany.id
        }
      })
      await prisma.phq.createMany({ data: dataPhq })
      progress()
    }
  )
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
