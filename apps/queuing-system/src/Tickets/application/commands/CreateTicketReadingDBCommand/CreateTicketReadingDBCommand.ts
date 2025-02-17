/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, ICommand } from '@turnly/shared'
import { Ticket } from 'Tickets/domain/entities/Ticket'

export class CreateTicketReadingDBCommand implements ICommand {
  public constructor(public readonly payload: EntityAttributes<Ticket>) {}
}
