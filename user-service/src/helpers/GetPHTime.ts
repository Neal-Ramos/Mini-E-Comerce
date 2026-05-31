export function GetPHTime(): Date {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" }));
}