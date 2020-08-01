// This will be mapping object in JS
enum MediaTypes {
  JSON = 'application/json',
}

// Smaller bundle size, the value will be replaced in th JS code
const enum MediaTypes2 {
  JSON = 'application/json',
}

/* compilerOptions -> preserveConstEnums = true
 *  this will make const enum the same as no const */
