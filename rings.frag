// Fragment shader

#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif

#define PROCESSING_LIGHT_SHADER

// These values come from the vertex shader
varying vec4 vertColor;
varying vec3 vertNormal;
varying vec3 vertLightDir;
varying vec4 vertTexCoord;

void main() {

  if (length(vertTexCoord.xy - 0.5) < 0.5) {
      gl_FragColor = vec4(0.2, 0.4, 1.0, 1.0);

      if (length(vertTexCoord.xy - 0.25) < 0.05){
        gl_FragColor = vec4(0.2, 0.4, 1.0, 0.0);
    } 
    if (length(vertTexCoord.xy - 0.75) < 0.05){
        gl_FragColor = vec4(0.2, 0.4, 1.0, 0.0);
    }
    if (sqrt((vertTexCoord.s - 0.75) * (vertTexCoord.s - 0.75) + (vertTexCoord.t - 0.25)* (vertTexCoord.t - 0.25))  < 0.05) {
       gl_FragColor = vec4(0.2, 0.4, 1.0, 0.0);
    }
    if (sqrt((vertTexCoord.s - 0.25) * (vertTexCoord.s - 0.25) + (vertTexCoord.t - 0.75)* (vertTexCoord.t - 0.75))  < 0.05) {
      gl_FragColor = vec4(0.2, 0.4, 1.0, 0.0);
    }
    if (sqrt((vertTexCoord.s - 0.5) * (vertTexCoord.s - 0.5) + (vertTexCoord.t - 0.85)* (vertTexCoord.t - 0.85))  < 0.05) {
      gl_FragColor = vec4(0.2, 0.4, 1.0, 0.0);
    }
    if (sqrt((vertTexCoord.s - 0.5) * (vertTexCoord.s - 0.5) + (vertTexCoord.t - 0.15)* (vertTexCoord.t - 0.15))  < 0.05) {
      gl_FragColor = vec4(0.2, 0.4, 1.0, 0.0);
    }
    if (sqrt((vertTexCoord.s - 0.85) * (vertTexCoord.s - 0.85) + (vertTexCoord.t - 0.5)* (vertTexCoord.t - 0.5))  < 0.05) {
      gl_FragColor = vec4(0.2, 0.4, 1.0, 0.0);
    }
    if (sqrt((vertTexCoord.s - 0.15) * (vertTexCoord.s - 0.15) + (vertTexCoord.t - 0.5)* (vertTexCoord.t - 0.5))  < 0.05) {
      gl_FragColor = vec4(0.2, 0.4, 1.0, 0.0);
    }
    if (vertTexCoord.s < 0.6 && vertTexCoord.s > 0.4 && vertTexCoord.t < 0.6 && vertTexCoord.t > 0.4) { 
        gl_FragColor = vec4(0.2, 0.4, 1.0, 0.0);
      } 
  }
  else {
    gl_FragColor = vec4(0.2, 0.4, 1.0, 0.0);
  }
}

