import { SimplicialComplex } from './SimplicialComplex'
import { Entity } from './Entity'
import { URL } from './URL'

/**
 * Built-in primitive geometry.
 */

export const enum GeometryPrimitives {
  Triangle,
  Cylinder,
  Capsule,
  Sphere,
  Plane,
  Torus,
  Box,
}

/**
 * Geometry entity format types used to derive an internal
 * parser.
 */

export const enum GeometryFormatTypes {
  Three, // THREE.js Geometry spec
  Obj, // Wavefront OBJ format
}

/**
 * The `Geometry` type represents an interface for
 * describing a geometry for a mesh. The geometry may
 * have a simplicial complex, be a built-in primitive,
 * or be from an external source.
 */

export interface Geometry extends Entity {

  /**
   * An optional simplicial complex structure. The structure
   * *must* contain positions. Vertex/position normals should be
   * computed if not provided. Texture coordinates (uv) should be
   * derived in not provided.
   *
   * @see {@link SimplicialComplex}
   */

  complex?: SimplicialComplex;

  /**
   * An optional string value indicating the underlying
   * geometry primitive that should be used. This value may be
   * one of the following:
   *   - "triangle"
   *   - "cylinder"
   *   - "capsule"
   *   - "sphere"
   *   - "plane"
   *   - "torus"
   *   - "box"
   *
   * @see {@link GeometryPrimitives}
   */

  primitive?: string;

  /**
   * An optional URL value pointing to an external geometry description.
   * The `.type` property must be set to indicate the type of parser
   * to be used when parsing the contents of the remote file.
   */

  source?: URL;

  /**
   * An optional string value indicating the type of geometry. This value
   * should be used in conjunction with the `.source` URL value to help
   * indicate which parser to use. This value may be one of the
   * following:
   *   - "three"
   *   - "obj"
   *
   * @see {@link GeometryFormatTypes}
   */

  type?: string;
}
