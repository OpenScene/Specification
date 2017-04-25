import { Object3D } from './Object3D'
import { Vector4 } from './Vector4'
import { Vector3 } from './Vector3'
import { Entity } from './Entity'

/**
 * Build-in camera projection types.
 */

export const enum CameraProjectionTypes {
  Orthographic,
  Perspective,
}

/**
 * The `CameraViewport` type represents a structure
 * that contains value useful for computing a camera's
 * projection.
 */

export interface CameraViewport extends Entity {

  /**
   * The coordinate of the top of the viewport.
   */

  top: number;

  /**
   * The coordinate of the left of the viewport.
   */

  left: number;

  /**
   * The width of the viewport.
   */

  width: number;

  /**
   * The height of the viewport.
   */

  height: number;
}

/**
 * The `Camera` type represents an interface for position
 * a camera with a projection
 */

export interface Camera extends Object3D {

  /**
   * A camera projection type that must be defined. This value
   * may be one of the following:
   *   - "orthographic"
   *   - "perspective"
   *
   * @see {@link CameraProjectionTypes}
   */

  projection: string;

  /**
   * The camera's viewport. This value is optional and should be
   * computed if not provided.
   */

  viewport?: CameraViewport | Vector4 | Array<number>;

  /**
   * The camera's "look at" target vector.
   */

  target?: Vector3 | Array<number>;

  /**
   * The field of view expressed in radians for a camera
   * with a perspective projection.
   */

  fov?: number;
}

export class Camera implements Camera {
}
