/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { QueryBuilder } from '@turnly/shared'

import { Location } from '../../../../../src/Locations/domain/entities/Location'

export class LocationsQueryMother {
  static getOneWith(location: Location) {
    const { id, organizationId } = location.toObject()

    return new QueryBuilder<Location>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()
  }

  static getManyIn(locations: Location[]) {
    const ids = locations.map(location => location.toObject().id)

    return new QueryBuilder<Location>().in('id', ids).getMany(0, ids.length)
  }
}
