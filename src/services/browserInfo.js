export function getBrowserInfo() {
  const navigatorInfo = window.navigator || {};
  const acceptHeader = navigatorInfo.userAgent || '';
  const colorDepth = navigatorInfo.screen?.colorDepth || '';
  const language = navigatorInfo.language || '';
  const screenHeight = window.screen.height || '';
  const screenWidth = window.screen.width || '';
  const timeZoneOffset = new Date().getTimezoneOffset();
  const userAgent = navigatorInfo.userAgent || '';

  return {
    acceptHeader,
    colorDepth,
    language,
    screenHeight,
    screenWidth,
    timeZoneOffset,
    userAgent
  };
}
