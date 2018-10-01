module.exports = function getZerosCount(number, base) {
  let zerosCount = 0;

  let primitive = 2;
  let tempBase = base;
  const primitivesPowerMap = new Map();

  while (primitive <= tempBase) {
    if (tempBase % primitive) {
      primitive++;
    } else {
      let power = primitivesPowerMap.has(primitive) ? primitivesPowerMap.get(primitive) : 0;
      primitivesPowerMap.set(primitive, ++power);

      tempBase /= primitive;
    }
  }

  for (let [prim, power] of primitivesPowerMap) {
    const count = Math.floor(getZeros(number, prim) / power);
    
    if (zerosCount === 0 || zerosCount > count) {
      zerosCount = count;
    }
  }

  return zerosCount;
}

function getZeros(number, primitive) {
  let count = 0;

  while (number > 0) {
    number = Math.floor(number / primitive);
    count += number;
  }

  return count;
}