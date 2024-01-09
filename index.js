function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name === name;
  });
}

function findMatching(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase().startsWith(letters.toLowerCase());
  });
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase().startsWith(letters.toLowerCase());
  });
}

module.exports = { findMatching, fuzzyMatch, matchName };
