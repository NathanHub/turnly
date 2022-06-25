import {
  DateTime,
  IQueryHandler,
  QueryBuilder,
  QueryHandler,
} from '@turnly/shared'
import { ITicketsReadableRepo } from 'Tickets/domain/contracts/ITicketsRepo'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { ActiveTicketsByCustomerQuery } from './ActiveTicketsByCustomerQuery'

@QueryHandler(ActiveTicketsByCustomerQuery)
export class ActiveTicketsByCustomerQueryHandler
  implements IQueryHandler<ActiveTicketsByCustomerQuery, Ticket[]>
{
  public constructor(
    private readonly ticketsReadableRepo: ITicketsReadableRepo
  ) {}

  public async execute({
    customerId,
    companyId,
  }: ActiveTicketsByCustomerQuery) {
    const lastHour = DateTime.now().minusHours(1).toJSDate()

    const query = new QueryBuilder<Ticket>()
      .equal('customerId', customerId)
      .equal('companyId', companyId)
      .gte('createdAt', lastHour)
      .in('status', Ticket.getToAttendStatus())
      .getMany()

    return await this.ticketsReadableRepo.find(query)
  }
}