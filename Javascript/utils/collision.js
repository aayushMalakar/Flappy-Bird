function collision(
  primaryYPosition,
  primaryXPosition,
  primaryWidth,
  primaryHeight,
  secondaryYPostion,
  secondaryXPosition,
  secondayWidth,
  secondayHeight
) {
  if (
    primaryYPosition + primaryHeight >= secondaryYPostion &&
    primaryYPosition <= secondaryYPostion + secondayHeight &&
    primaryXPosition + primaryWidth >= secondaryXPosition &&
    primaryXPosition <= secondaryXPosition + secondayWidth
  ) {
    return true;
  } else {
    return false;
  }
}
