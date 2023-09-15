export function splitTextToArrayByDot(text: string) {
  return text.split('.').map(segment => segment.trim());
}
export function splitTextToArrayByDoubleSlash(text: string) {
  return text.split('//').map(segment => segment.trim());
}
