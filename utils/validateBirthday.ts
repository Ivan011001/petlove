export function validateBirthday(birthday: string): string | undefined {
  let error;

  const [year, month, day] = birthday.split("-").map(Number);

  const date = new Date(year, month - 1, day);

  const isValid =
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day;

  if (!isValid) {
    error = "*Invalid birthday date";
    return error;
  }

  return error;
}
