import { HydratedDocument, Model } from "mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";
import { from, tap } from "rxjs";
import { GetAllQueryParams, ICrudService } from "@fdj-ca/shared-models";

@Injectable()
export class CrudService<T> implements ICrudService<HydratedDocument<T>> {
  constructor(
    protected readonly model: Model<T>,
    protected readonly defaultLimit = 20
  ) {}

  getAll(query: GetAllQueryParams<T>) {
    const limit = query.limit ?? this.defaultLimit;
    return from(
      query.page
        ? this.model
            .find(
              Object.entries(query).reduce((acc, [key, value]) => {
                if (key === 'page' || key === 'limit') return acc;
                return {
                  ...acc,
                  [key]: {
                    $regex: `${value}*`,
                  },
                };
              })
            )
            .skip(limit * query.page)
            .limit(limit)
            .sort(query.sort ? { name: query.sort } : {})
            .exec()
        : this.model.find().limit(limit).sort(query.sort).exec()
    ).pipe();
  }

  getManyByIDs(ids: string[]) {
    return from(this.model.findById(ids).limit(this.defaultLimit).exec());
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
  getOneByID(id: string) {
    return from(this.model.findOne({ _id: id }).exec()).pipe(
      tap((item) => {
        if (!item) {
          throw new NotFoundException({
            message: `No ${this.model.modelName.toLowerCase()} found with id ${id}`,
          });
        }
      })
    );
  }
}
