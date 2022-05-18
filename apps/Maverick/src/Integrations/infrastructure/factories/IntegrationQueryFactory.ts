import { IntegrationByIdQuery } from 'Integrations/application/cqrs/queries/IntegrationByIdQuery'
import { IIntegrationQueryFactory } from 'Integrations/domain/contracts/IIntegrationQueryFactory'
import { IIntegrationReadableRepository } from 'Integrations/domain/contracts/IIntegrationRepository'

export class IntegrationQueryFactory implements IIntegrationQueryFactory {
  public constructor(
    private readonly integrationsRepository: IIntegrationReadableRepository
  ) {}

  public getById() {
    return new IntegrationByIdQuery(this.integrationsRepository)
  }
}
