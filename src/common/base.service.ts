import { EntityManager, FindConditions, FindOneOptions, getConnection, Repository, SelectQueryBuilder, UpdateResult } from "typeorm";
import { IBaseService } from "./i.base.service";
import { PagedModel } from "./paged-model";
import { SortingDirection } from "./sorting-direction";

export class BaseService<TRepository extends Repository<Entity>, Entity> implements IBaseService<Entity>{
  constructor(protected readonly repository: TRepository) {
  }

  async isExistsById(id: string | number, options?: FindOneOptions<Entity>): Promise<boolean> {
    if (options) {
      const result =await this.repository.findOne(id, options);
      if (!result)
        return false;
      return true;
    } else {
      const result =await this.repository.findOne(id);
      if (!result)
        return false;
      return true;
    }
  }

  findById(id: number | string, options?: FindOneOptions<Entity>) {
    if (options) {
      return this.repository.findOne(id, options);
    } else {
      return this.repository.findOne(id);
    }
  }

  findOne(options?: FindOneOptions<Entity> | FindConditions<Entity>): Promise<any> {
    return this.repository.findOne(options);
  }

  async paged(queryBuilder: SelectQueryBuilder<Entity>, pageNumber: number, pageSize: number, orderBy:SortingDirection, orderByPropertyName: string) {
    const [items, itemsCount] = await queryBuilder
      .skip((pageNumber - 1) * pageSize)
      .take(pageSize)
      .orderBy(orderByPropertyName, orderBy)
      .getManyAndCount();

    const pagedResponse = new PagedModel<Entity>(
      {
        pageNumber,
        pageSize,
        orderBy,
        orderByPropertyName,
        itemsCount,
        items
      }
    );

    return pagedResponse;
  }


  create(record: Partial<Entity>) {
    const doc = this.repository.create(record as Entity);
    return this.repository.save(doc);
  }


  createMany(records: Partial<Entity[]>) {
    const docs = this.repository.create(records as Entity[]);
    return this.repository.save(docs);
  }


  updateById(id: number | string, record: Partial<Entity>): Promise<UpdateResult> {
    return this.repository.update(id, record as Entity);
  }


  updateMany(criteria: FindConditions<Entity>, record: Partial<Entity>) {
    return this.repository.update(criteria, record as Entity);
  }


  deleteById(id: number | string) {
    return this.repository.delete(id);
  }

  delete(criteria: FindConditions<Entity>) {
    return this.repository.delete(criteria);
  }


  createQueryBuilder(alias = ''): SelectQueryBuilder<Entity> {
    return this.repository.createQueryBuilder(alias);
  }

}