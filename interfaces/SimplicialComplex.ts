import { Vector3 } from './Vector3'
import { Vector2 } from './Vector2'
import { Entity } from './Entity'

/**
 * The `SimplicialComplex` type represents an abstract interface to a
 * triangulated directed graph.
 */

export interface SimplicialComplex extends Entity {
  positions: Vector3[] | Array<Array<number>> | Array<number>;
  normals?: Vector3[] | Array<Array<number>> | Array<number>;
  cells?: Vector3[] | Array<Array<number>> | Array<number>;
  uvs?: Vector2[] | Array<Array<number>> | Array<number>;
}
