/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { QueryBuilder } from '@turnly/shared'

import { Organization } from '../../../../../src/Organizations/domain/entities/Organization'

export class OrganizationsQueryMother {
  static getOneWith(organization: Organization) {
    const { id } = organization.toObject()

    return new QueryBuilder<Organization>().equal('id', id).getOne()
  }

  static getManyIn(organizations: Organization[]) {
    const ids = organizations.map(organization => organization.toObject().id)

    return new QueryBuilder<Organization>().in('id', ids).getMany(0, ids.length)
  }
}
