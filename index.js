// Functions to calculate distance from headquaters in blocks
function distanceFromHqInBlocks(pickupLocation) {
    const hq = 42;
    return Math.abs(pickupLocation - hq);

}
// Convert blocks to feet (1 block = 264 feet)
function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

// Calculate distance travelled between two points in feet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Fare calculation based on distance
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

// Export functions if needed
// module.exports = { distanceFromHqInBlocks, distanceFromHqInFeet, distanceTravelledInFeet, calculatesFarePrice };
