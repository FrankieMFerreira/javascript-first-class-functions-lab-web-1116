function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue){
    return function(score) {
      return score * multiplierValue
    }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(multiplier, score){
  return score * multiplier
}

var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)
