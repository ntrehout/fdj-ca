import { Model } from "mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";
import { from, tap } from "rxjs";
import { GetAllQueryParams } from "../../types/query-params.types";

@Injectable()
export class CrudService<T> {
  constructor(
    protected readonly model: Model<T>,
    protected readonly defaultLimit = 20
  ) {}

  getAll(query: GetAllQueryParams) {
    const limit = query.limit ?? this.defaultLimit;
    return from(
      query.page
        ? this.model
            .find()
            .skip(limit * query.page)
            .limit(limit)
            .sort(query.sort ? { name: query.sort } : {})
            .exec()
        : this.model.find().limit(limit).sort(query.sort).exec()
    ).pipe();
  }

  getManyByID(id: string) {
    return from(this.model.findById(id).limit(this.defaultLimit).exec());
  }

  getManyByName(name: string) {
    return from(
      this.model
        .find({
          name: {
            $regex: `${name}*`,
          },
        })
        .limit(this.defaultLimit)
        .exec()
    ).pipe(
      tap((item) => {
        if (!item) {
          throw new NotFoundException({
            message: `No ${this.model.modelName.toLowerCase()} found with id ${name}`,
          });
        }
      })
    );
  }
  getOneByID(id: string, throwIfNotPresent = true) {
    return from(this.model.findOne({ _id: id }).exec()).pipe(
      tap((item) => {
        if (!item && throwIfNotPresent) {
          throw new NotFoundException({
            message: `No ${this.model.modelName.toLowerCase()} found with id ${id}`,
          });
        }
      })
    );
  }
}
