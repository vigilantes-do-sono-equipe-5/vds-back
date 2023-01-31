import { Users } from 'src/users/entities/users.entity'

export class CreateCompanyDto {
  name: string
  users: Users[]
}
