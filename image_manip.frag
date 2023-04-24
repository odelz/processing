// Fragment shader
// The fragment shader is run once for every pixel
// It can change the color and transparency of the fragment.

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

#define PROCESSING_TEXLIGHT_SHADER

// Set in Processing
uniform sampler2D my_texture;
uniform sampler2D other_texture;

// These values come from the vertex shader
varying vec4 vertColor;
varying vec3 vertNormal;
varying vec3 vertLightDir;
varying vec4 vertTexCoord;

void main() { 
  vec4 diffuse_color = vec4(0,0,0,0);

  for (int i=-8; i<8; i++) {
    for (int j = -8; j <8; j++) {
      if ((vertTexCoord.s + 0.004 *i) >0 && (vertTexCoord.s + 0.004 *i) <1 && 
      (vertTexCoord.t + 0.004 *j) >0 && (vertTexCoord.t + 0.004 *j) <1) {
        diffuse_color += texture2D(my_texture, vec2(vertTexCoord.s + 0.004*i,vertTexCoord.t + 0.004*j));
      }
    }
  }
  vec4 doge_color = texture2D(other_texture, vec2(vertTexCoord.s*2,vertTexCoord.t*2));
  diffuse_color = diffuse_color/256;
  float diffuse = clamp(dot (vertNormal, vertLightDir),0.0,1.0);
  if (vertTexCoord.s < 0.5 && vertTexCoord.t < 0.5 && doge_color.g < 0.9) {
    gl_FragColor = vec4(doge_color.rgb, 1.0);
  } else {
    gl_FragColor = vec4(diffuse * diffuse_color.rgb, 1.0);
  } 
  
}
