Overview
========

OpenScene describes a JSON format for representing graphical scenes. A
scene is a hieracrhy of various structures representing meshes,
materials, lights, and animations. The specification describes a scene
much like how HTML and CSS describe the presentation of a website.

For example, the following OpenScene manifest describes a scene
containing a perspective camera positioned at the origin (`[0, 0, 0]`),
or "center" of the world. The camera is looking at a mesh positioned at
`[5, 5, 5]` that has a primitive sphere geometry. The mesh is contained by a
"flat" material that has a color of "green".

```json
[{
  "class": "scene",
  "children": [{
    "class": "camera",
    "projection": "perspective",
    "fov": 1.04719,
    "position": [0, 0, 0],
    "target": [5, 5, 5],
    "children": [{
      "class": "material",
      "type": "flat",
      "color": "green",
      "children": [{
        "class": "mesh",
        "geometry": {"primitive": "sphere"},
        "position": [5, 5, 5]
      }]
    }]
  }]
}]
```

An XML equivalent may look like:

```
<scene>
  <camera fov="1.04719" projection="perspective" position="0, 0, 0" target="5, 5, 5">
    <material type="flat" color="green">
      <mesh geometry="primitive: sphere" position="5, 5, 5"></mesh>
    </material>
  </camera>
</scene>
```

OpenScene *does* ***not*** describe a programming language and therefore
cannot provide a mechanism for describing interactions. However, it can
allow for descriptions of animations that can occur as a function of
time which can be triggered by the implementor. This is very similar to
how CSS3 animations and transitions work on websites.

OpenScene *does* ***not*** mandate a specific programming language or rendering
engine. It is intended to be an open specification that should be implemented
at the application level. The specification should be implemented in its
entirety to ensure that a described scene can be rendered in various
rendering engines on various platforms without discrepancy. For example, an
OpenScene description rendered in the Unity3D engine should look the same as a
scene rendered in THREE.js, Unreal Engine, OpenGL, WebGL, or any other
graphics rendering engine or platform.

The OpenScene Specification has a number of features and design
principles:

* **JSONSchema**: The Specification is backed by JSONSchema to allow for
  implementors to validate the scenes created.
* **Obvious**: The Specification aimes to be obvious and intuitive.
  Readers and implementors should feel comfortable constructing scenes.
  Constructs should feel familiar.
