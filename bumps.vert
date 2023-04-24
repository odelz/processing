// Vertex shader
// The vertex shader is run once for every vertex
// It can change the (x,y,z) of the vertex, as well as its normal for lighting.

// Our shader uses both processing's texture and light variables
#define PROCESSING_TEXLIGHT_SHADER

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

// Set automatically by Processing
uniform mat4 transform;
uniform mat3 normalMatrix;
uniform vec3 lightNormal;
uniform mat4 texMatrix;
uniform sampler2D texture;

// Come from the geometry/material of the object
attribute vec4 vertex;
attribute vec4 color;
attribute vec3 normal;
attribute vec2 texCoord;

// These values will be sent to the fragment shader
varying vec4 vertColor;
varying vec3 vertNormal;
varying vec3 vertLightDir;
varying vec4 vertTexCoord;
varying vec4 vertTexCoordR;
varying vec4 vertTexCoordL;


void main() {

  // provided
  vertColor = color;
  vertTexCoord = texMatrix * vec4(texCoord, 1.0, 1.0);
  float offset;
  float offsetT;
  float offsetB;
  float offsetTB;
  float offsetL;
  float offsetR;
  float offsetLR;
  vec3 newNormal;
  offset = 20.0 * sin(40.0 * length(vertTexCoord.xy - 0.5));
  if (vertTexCoord.x - 0.02 >= 0.0 && vertTexCoord.x + 0.02 <= 1.0 && vertTexCoord.y - 0.02 >= 0.0 && vertTexCoord.y + 0.02 <= 1.0) {
  offsetL = 20.0*sin(40.0 *length(vec2(vertTexCoord.x + 0.04 - 0.5, vertTexCoord.y - 0.5)));
  offsetR = 20.0 *sin(40.0 *length(vec2(vertTexCoord.x - 0.04 - 0.5, vertTexCoord.y-0.5)));
  offsetT = 20.0*sin(40.0 *length(vec2(vertTexCoord.x-0.5, vertTexCoord.y + 0.04-0.5)));
  offsetB = 20.0*sin(40.0 *length(vec2(vertTexCoord.x-0.5, vertTexCoord.y - 0.04-0.5)));
  offsetLR = offsetL - offsetR;
  offsetLR *= 0.05;
  offsetTB = offsetT - offsetB;
  offsetTB *= 0.05;
}

  newNormal = vec3(normal.x - offsetLR, normal.y - offsetTB, normal.z);
  vec4 newoffset = vec4(normal*offset, 0.0);
  vertNormal = normalize(normalMatrix * -newNormal);

  gl_Position = transform*(vertex + newoffset);
  vertLightDir = normalize(-lightNormal);

}
