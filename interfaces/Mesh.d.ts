import { ShaderAttributes } from './ShaderAttributes'
import { ShaderUniforms } from './ShaderUniforms'
import { ShaderSource } from './ShaderSource'
import { Geometry } from './Geometry'
import { Object3D } from './Object3D'

/**
 */

export interface Mesh extends Object3D {

  /**
   * Mesh entity class type.
   */

  class: 'mesh'

  geometry: Geometry

  //vertexShader: 
}
