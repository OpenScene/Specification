/**
 * The `Entity` is the base type for all nodes in a
 * OpenScene graph that represent a meaningful entity.
 */

export interface Entity {
  id?: number | string;
  class?: string;
  children?: Entity[];
  description?: string;
}
