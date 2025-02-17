/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { queryBus } from '@turnly/shared'

import { OrganizationsFactory } from '../factories/OrganizationsFactory'

/**
 * Organizations module
 */
queryBus.register(OrganizationsFactory.getQueryHandlers())
