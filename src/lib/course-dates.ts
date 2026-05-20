const MONTHS_RO = [
  "ianuarie",
  "februarie",
  "martie",
  "aprilie",
  "mai",
  "iunie",
  "iulie",
  "august",
  "septembrie",
  "octombrie",
  "noiembrie",
  "decembrie",
];

const MONTHS_RO_SHORT = [
  "ian",
  "feb",
  "mar",
  "apr",
  "mai",
  "iun",
  "iul",
  "aug",
  "sep",
  "oct",
  "noi",
  "dec",
];

export type CourseDates = {
  start: Date;
  end: Date;
  startLabel: string;
  endLabel: string;
  rangeLabel: string;
  rangeShort: string;
};

export function getCourseDates(now: Date = new Date()): CourseDates {
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const end = new Date(start);
  end.setDate(end.getDate() + 7);

  const sameMonth = start.getMonth() === end.getMonth();

  const startLabel = `${start.getDate()} ${MONTHS_RO[start.getMonth()]}`;
  const endLabel = `${end.getDate()} ${MONTHS_RO[end.getMonth()]}`;

  const rangeLabel = sameMonth
    ? `${start.getDate()}–${end.getDate()} ${MONTHS_RO[end.getMonth()]}`
    : `${startLabel} – ${endLabel}`;

  const rangeShort = sameMonth
    ? `${start.getDate()}–${end.getDate()} ${MONTHS_RO_SHORT[end.getMonth()]}`
    : `${start.getDate()} ${MONTHS_RO_SHORT[start.getMonth()]} – ${end.getDate()} ${MONTHS_RO_SHORT[end.getMonth()]}`;

  return { start, end, startLabel, endLabel, rangeLabel, rangeShort };
}
