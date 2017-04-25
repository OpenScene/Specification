/**
 * Known entity types.
 */

export type EntityClassTypes = "nil"
  | "geometry"
  | "material"
  | "camera"
  | "scene"
  | "light"
  | "mesh"

/**
 * The `Entity` is the base type for all nodes in a
 * OpenScene graph that represent a meaningful entity.
 */

export interface Entity {
  id?: number | string;
  class: EntityClassTypes;
  children?: Entity[];
  description?: string;
}
