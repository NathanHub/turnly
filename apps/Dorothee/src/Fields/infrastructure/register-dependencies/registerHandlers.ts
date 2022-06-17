import { commandBus, eventBus, queryBus } from '@turnly/shared'

import { FieldFactory } from '../factories/FieldFactory'

/**
 * Field module
 */
queryBus.register(FieldFactory.getQueryHandlers())
commandBus.register(FieldFactory.getCommandHandlers())
eventBus.subscribe(FieldFactory.getEventSubscribers())
