import { PrismaClient } from '@prisma/client'
import { SleepDiariesWithoutTagsDto } from 'src/sleep-diaries/dto/sleepDiariesWithoutTags.dto'
import { AddGadDto } from '../src/gads/dto/add-gad.dto'
import { AddIsiDto } from '../src/isis/dto/add-isi.dto'
import { AddPhqDto } from '../src/phqs/dto/add-phq.dto'
import { AddProductivityDto } from '../src/productivitys/dto/add-productivity.dto'
import { AddRatingsDto } from '../src/ratings/dto/add-ratings.dto'
import { SleepDiariesWithTagsDto } from '../src/sleep-diaries/dto/sleepDiariesWithTags.dto'
import { AddUserProgramDto } from '../src/userPrograms/dto/add-user-program.dto'
import * as dataJson from '../src/utils/data/data.json'

const prisma = new PrismaClient()
const tags = [
  { sleep_tag: 'caffeine' },
  { sleep_tag: 'noise' },
  { sleep_tag: 'pain' },
  { sleep_tag: 'exercise' },
  { sleep_tag: 'light' },
  { sleep_tag: 'medicine' },
  { sleep_tag: 'nicotine' },
  { sleep_tag: 'partner' },
  { sleep_tag: 'nap' },
  { sleep_tag: 'temperature' },
  { sleep_tag: 'meal' },
  { sleep_tag: 'alcohol' },
  { sleep_tag: 'bathroom' },
  { sleep_tag: 'dream' }
]
const regexLabelRating = /^session\d+_rate$/
let qtdUsers = 0
let qtdUserProgramSessions = 0
let qtdSleepDiaries = 0
let qtdTags = 0
let qtdProductivity = 0
let qtdRatings = 0
let qtdIsi = 0
let qtdGad = 0
let qtdPhq = 0

const progress = (): void => {
  console.clear()
  console.log(`
      Seeding in progress...\n
      1 company cadastrado.
      ${qtdUsers} usuários cadastrados.
      ${qtdUserProgramSessions} user_program_sessions cadastrados.
      ${qtdSleepDiaries} sleep_diaries cadastrados.
      ${qtdTags} tags cadastradas.
      ${qtdProductivity} productivity cadastrados.
      ${qtdRatings} ratings cadastrados.
      ${qtdIsi} isi cadastrados.
      ${qtdGad} gad cadastrados.
      ${qtdPhq} phq cadastrados.
      `)
}

const main = async (): Promise<void> => {
  const data = {
    name: 'Empresa X',
    employees: 60
  }
  const newCompany = await prisma.company.create({ data })
  progress()

  qtdTags += tags.length
  await prisma.tag.createMany({
    data: tags
  })
  progress()

  void dataJson.user.map(async ({ points, day_goal, night_goal, user_program_sessions, sleep_diaries, productivity, ratings, isi, gad, phq }) => {
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
    const dataUserProgramSessions = user_program_sessions.map((e: AddUserProgramDto) => {
      return {
        ...e,
        user_id: newUser.id,
        company_id: newCompany.id
      }
    })

    await prisma.user_Program_Session.createMany({
      data: dataUserProgramSessions
    })
    progress()

    qtdSleepDiaries += sleep_diaries.length
    sleep_diaries.map(async (e: SleepDiariesWithTagsDto) => {
      const tags = e.tags
      delete e.tags
      const elementsWithTags: SleepDiariesWithoutTagsDto = e
      const data = {
        ...elementsWithTags,
        user_id: newUser.id,
        company_id: newCompany.id
      }

      const sleep_DiariesId = (await prisma.sleep_Diaries.create({ data })).id
      tags?.map(async (e: { sleep_tag: string }) => {
        const sleep_tagId = (
          await prisma.tag.findUnique({
            where: {
              sleep_tag: e.sleep_tag
            }
          })
        )?.id
        if (sleep_tagId) {
          await prisma.tagOnSleep_Diaries.create({ data: { sleep_tagId, sleep_DiariesId, companyId: newCompany.id } })
        } else {
          console.log(`A tag ${e.sleep_tag} não está cadastrada.`)
        }
      })
    })
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

    const dataRatings = ratings.map((e: AddRatingsDto) => {
      return {
        ...e,
        user_id: newUser.id,
        company_id: newCompany.id
      }
    })
    const dataratingsChecked = dataRatings.filter((e: AddRatingsDto): boolean => regexLabelRating.test(e.label))
    await prisma.rating.createMany({ data: dataratingsChecked })
    qtdRatings += dataratingsChecked.length
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
  })
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
