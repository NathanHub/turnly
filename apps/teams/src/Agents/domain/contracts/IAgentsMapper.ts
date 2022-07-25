/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Agent } from 'Agents/domain/entities/Agent'

export type IAgentsMapper<Model> = IEntityMapper<Agent, Model>
