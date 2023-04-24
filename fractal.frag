// Fragment shader

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

#define PROCESSING_LIGHT_SHADER

uniform float cx;
uniform float cy;

// These values come from the vertex shader
varying vec4 vertColor;
varying vec3 vertNormal;
varying vec3 vertLightDir;
varying vec4 vertTexCoord;

void main() {

 vec4 diffuse_color = vec4(0,0,0,0);
 vec2 z;
 z.x = 3*vertTexCoord.s - 1.5;
 z.y = 3*vertTexCoord.t - 1.5;
 float previous;
 for (int i =0; i<20;i++) {
  float x;
  float y;
  //a + ib
  //a3+3a2bi-3ab2-b3i
  //a^3-3ab^2 + cx
  x = z.x*z.x*z.x - 3* z.x * z.y*z.y + cx;
  y =  3*z.x*z.x*z.y - z.y*z.y*z.y + cy;
  if (sqrt(x*x + y*y) < 4.0) {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  } else {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
  z.x = x;
  z.y = y;
    
  } 
  
  
}

