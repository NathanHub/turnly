/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/shared'

import { CreateAnswersBulkCommand } from '../../../../../../src/Answers/application/commands/CreateAnswerBulkCommand'
import { Answer } from '../../../../../../src/Answers/domain/entities/Answer'
import { AnswerMother } from '../../../domain/AnswerMother'

export class CreateAnswersBulkCommandMother {
  static create(
    params: Omit<
      EntityAttributes<Answer>,
      'id'
    >[] = AnswerMother.randomArrayOfPayload()
  ): CreateAnswersBulkCommand {
    return new CreateAnswersBulkCommand(params)
  }

  static random(): CreateAnswersBulkCommand {
    return this.create()
  }
}
