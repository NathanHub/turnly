/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CreateTicketReadingDBCommand } from '../../../../../../src/Tickets/application/commands/CreateTicketReadingDBCommand'
import { TicketMother } from '../../../domain/TicketMother'

export class CreateTicketReadingDBCommandMother {
  static create(): CreateTicketReadingDBCommand {
    return new CreateTicketReadingDBCommand(TicketMother.random().toObject())
  }

  static random(): CreateTicketReadingDBCommand {
    return this.create()
  }
}
