/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Validator } from '@turnly/shared'

const extra = Validator.object({
  key: Validator.string(),
  value: Validator.string(),
})

const create = Validator.object({
  serviceId: Validator.isId(),
  serviceName: Validator.string(),
  locationId: Validator.isId(),
  customerId: Validator.isId(),
  organizationId: Validator.isId(),
  extra: Validator.getBuilder().array().items(extra).optional(),
})

const get = Validator.object({
  id: Validator.isId(),
  organizationId: Validator.isId(),
  customerId: Validator.isId(),
})

const getTicketsBeforeYours = Validator.object({
  ticketId: Validator.isId(),
  customerId: Validator.isId(),
  organizationId: Validator.isId(),
})

const getTicketsWaitingForService = Validator.object({
  serviceIds: Validator.getBuilder().array().items(Validator.isId()),
  organizationId: Validator.isId(),
})

export const validator = {
  create,
  get,
  leave: get,
  announce: get,
  getTicketsBeforeYours,
  getTicketsWaitingForService,
}
