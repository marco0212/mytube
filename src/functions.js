import { API_KEY } from "./YOUTUBE_KEY";

function getRelateToVideos(id, cb) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=5&key=${API_KEY}`
  )
    .then(response => response.json())
    .then(response => {
      const { items } = response;
      cb(items);
    });
}

function getSearchedVideos(keyword, cb) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${keyword}&maxResults=10&order=relevance&key=${API_KEY}`
  )
    .then(response => response.json())
    .then(response => {
      const { items } = response;
      cb(items);
    });
}

function getChannelData(id, cb) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${API_KEY}`
  )
    .then(response => response.json())
    .then(response => {
      const { items } = response;
      cb(items[0]);
    });
}

function getVideoById(id, cb) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${API_KEY}`
  )
    .then(response => response.json())
    .then(response => {
      const { items } = response;
      cb(items[0]);
    });
}

function getPopularVideos(cb) {
  return fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=9&key=${API_KEY}`
  )
    .then(response => response.json())
    .then(response => {
      const { items } = response;
      cb(items);
    });
}

function getYoutubeEmbedUrl(id) {
  return `https://www.youtube.com/embed/${id}`;
}

function timeTransformer(time) {
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

export {
  getSearchedVideos,
  getRelateToVideos,
  getChannelData,
  getYoutubeEmbedUrl,
  getVideoById,
  getPopularVideos,
  timeTransformer
};
