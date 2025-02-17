/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/shared'

import { Customer } from '../entities/Customer'

export type ICustomerReadableRepo = IReadableRepository<Customer>
export type ICustomerWritableRepo = IWritableRepository<Customer>
