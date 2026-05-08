export function getPoster(poster?: string) {
  if (!poster || poster === "N/A") {
    return "/no-poster.png";
  }
  return poster;
}
