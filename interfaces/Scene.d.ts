import { Entity } from './Entity'

/**
 * A Scene is an entity contains all entities that
 * may appear in a "scene".
 */

export interface Scene extends Entity {

  /**
   * Scene entity class type.
   */

  class: 'scene'
}
