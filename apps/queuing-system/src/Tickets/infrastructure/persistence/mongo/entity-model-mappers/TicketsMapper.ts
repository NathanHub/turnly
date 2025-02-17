/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/shared'
import { ITicketsMapper } from 'Tickets/domain/contracts/ITicketsMapper'
import { Ticket } from 'Tickets/domain/entities/Ticket'

import { ITicketDocument, TicketModel } from '../models/TicketModel'

export class TicketsMapper implements ITicketsMapper<ITicketDocument> {
  public toEntity(document: ITicketDocument): Ticket {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Ticket>>()

    return Ticket.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Ticket): ITicketDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new TicketModel({ ...attrs, _id })
  }

  public toEntityList(documents: ITicketDocument[]): Ticket[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Ticket[]): ITicketDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
