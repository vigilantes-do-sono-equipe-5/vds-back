import {
  PrismaClient,
  Sleep_Diaries,
  User_Program_Session,
  Productivity,
  Rating,
  Gad,
  Isi,
  Phq
} from '@prisma/client'
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

async function main (): Promise<void> {
  const data = {
    name: 'Empresa X'
  }
  const newCompany = await prisma.company.create({ data })

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

      user_program_sessions.map(
        async (e: AddUserProgramDto): Promise<User_Program_Session> => {
          const data = {
            ...e,
            user_id: newUser.id,
            company_id: newCompany.id
          }
          return await prisma.user_Program_Session.create({ data })
        }
      )

      sleep_diaries.map(
        async (e: AddSleepDiariesDto): Promise<Sleep_Diaries> => {
          let tags: Array<{ sleep_tag: string }> | [] = []
          e.tags ? tags = e.tags : e.tags = []
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
              const data = { sleep_tag: i.sleep_tag, sleep_DiariesId: sleepDiarie.id }
              await prisma.tag.create({ data })
            }
          }
          return sleepDiarie
        }
      )

      productivity.map(async (e: AddProductivityDto): Promise<Productivity> => {
        const data = {
          ...e,
          user_id: newUser.id,
          company_id: newCompany.id
        }
        return await prisma.productivity.create({ data })
      })

      ratings.map(async (e: AddRatingsDto): Promise<Rating> => {
        const data = {
          ...e,
          user_id: newUser.id,
          company_id: newCompany.id
        }
        return await prisma.rating.create({ data })
      })

      isi.map(async (e: AddIsiDto): Promise<Isi> => {
        const data = {
          ...e,
          user_id: newUser.id,
          company_id: newCompany.id
        }
        return await prisma.isi.create({ data })
      })

      gad.map(async (e: AddGadDto): Promise<Gad> => {
        const data = {
          ...e,
          user_id: newUser.id,
          company_id: newCompany.id
        }
        return await prisma.gad.create({ data })
      })

      phq.map(async (e: AddPhqDto): Promise<Phq> => {
        const data = {
          ...e,
          user_id: newUser.id,
          company_id: newCompany.id
        }
        return await prisma.phq.create({ data })
      })
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
