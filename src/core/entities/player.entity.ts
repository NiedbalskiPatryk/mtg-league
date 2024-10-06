import { Entity, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Player {
  @PrimaryKey()
  id!: number;
}
