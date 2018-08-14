module.exports = {
  isANumber,
  isAString,
  isAnArray,
  isAnObject,
  isAFunction,
  isBoolean
}

function isANumber (x) {
  if (typeof x === 'number' && !isNan(x)) {
    return true
  }
  return false
}

function isAString (x) {
  if (typeof x === 'string') {
    return true
  }
  return false
}

function isAnArray (x) {
  return Array.isArray(x)
}

function isAnObject (x) {
  if (!isAnArray(x) && typeof x === 'object' && x !== null) {
    return true
  }
  return false
}

function isAFunction (x) {
  if (typeof x === 'function') {
    return true
  }
  return false
}

function isBoolean (x) {
  if (typeof x === 'boolean') {
    return true
  }
  return false
}

function isUndefined (x) {
  if (typeof x === 'undefined') {
    return true
  }
  return false
}
