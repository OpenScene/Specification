import { Quaternion } from './Quaternion'
import { Vector3 } from './Vector3'
import { Entity } from './Entity'

/**
 * The `Object3D` type represents the base type for all
 * positional entities in 3D space.
 */

export interface Object3D extends Entity {

  /**
   * The rotation (or orientation) of the object.kj
   */

  rotation?: Quaternion| Array<number>;
  position?: Vector3 | Array<number>;
  scale?: Vector3| Array<number> | number;
}
