/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'

import { IntegrationsController } from '../controllers/IntegrationsController'
import { IntegrationsMapper } from './IntegrationsMapper'

export class IntegrationsServer extends Producers.ServerImplementation<Producers.Addons.IIntegrationsServer> {
  public constructor(
    private readonly integrationsController: IntegrationsController
  ) {
    super()
  }

  @Producers.CallHandler(Producers.Addons.GetIntegrationResponse)
  public async getOne(
    call: Producers.ServerUnaryCall<
      Producers.Addons.GetIntegrationRequest,
      Producers.Addons.GetIntegrationResponse
    >,
    callback: Producers.ICallback<Producers.Addons.GetIntegrationResponse>
  ) {
    const { data, meta } = await this.integrationsController.getOne({
      id: call.request.getId(),
    })

    const response = new Producers.Addons.GetIntegrationResponse()
    const integration = IntegrationsMapper.toRPC(data)

    response.setData(integration)
    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }

  public get implementation() {
    return {
      getOne: this.getOne.bind(this),
    }
  }
}
