export function durationTransformer(duration) {
  const result = [];
  duration.split("").forEach((s, i, arr) => {
    let start = 0,
      end = 1;
    if (!isNaN(s)) {
      start = i;
      if (!isNaN(arr[i + 1])) {
        end = 2;
      }
      result.push(arr.splice(start, end).join(""));
    }
  });
  const lastIndex = result.length - 1;
  if (Number(result[lastIndex]) < 10)
    result[lastIndex] = "0" + result[lastIndex];
  return result.join(":");
}
export function timeTransformer(time) {
  const now = new Date().getTime(),
    publishedAt = new Date(time).getTime(),
    gap = now - publishedAt,
    second = gap / 1000,
    minute = Math.floor(second / 60),
    hour = Math.floor(minute / 60),
    day = Math.floor(hour / 24),
    month = Math.floor(day / 30),
    year = Math.floor(month / 12);

  if (year) return `${year}년 전`;
  if (month) return `${month}개월 전`;
  if (day) return `${day}일 전`;
  if (hour) return `${hour}시간 전`;
  return `${minute}분 전`;
}
export function viewCountTransformer(count) {
  const tenThousand = Math.floor(count / 10000),
    thousand = (count / 1000).toFixed(1);
  if (tenThousand) return `${tenThousand}만 회`;
  if (thousand) return `${thousand}천 회`;
  return count;
}
