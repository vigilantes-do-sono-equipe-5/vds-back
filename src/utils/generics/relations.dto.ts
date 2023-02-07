export class RelationDto<T> {
  connect?: { id?: string }
  create: T
  connectOrCreate: { where: { id?: string }, create: T }
}
