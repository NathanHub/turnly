/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes } from '@turnly/shared'
import mongoose, { Document, Model, Schema } from 'mongoose'
import { Service } from 'Services/domain/entities/Service'

export interface IServiceDocument
  extends Omit<EntityAttributes<Service>, 'id'>,
    Document {}

export type IServiceModel = Model<IServiceDocument>

const schema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    companyId: {
      type: String,
      required: true,
      index: true,
    },
    locationId: {
      type: String,
      required: true,
      index: true,
    },
  },
  { timestamps: true }
)

export const ServiceModel = mongoose.model<IServiceDocument, IServiceModel>(
  'Service',
  schema
)
