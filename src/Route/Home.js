import React, { useState, useEffect } from "react";
import { API_KEY } from "../YOUTUBE_KEY";
import Loading from "../Component/Loading";
import PopularListArea from "../Component/PopularListArea";

export default function Home() {
  const [videos, setVideos] = useState(null);
  const [region, setRegion] = useState("KR");
  const [isLoading, setIsLoading] = useState(true);
  const allRegions = ["KR", "US", "GB", "ES", "IT", "JP"];

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=id,snippet,statistics&chart=mostPopular&maxResults=8&regionCode=${region}&key=${API_KEY}`
    )
      .then(response => response.json())
      .then(jsonData => {
        setVideos(jsonData.items);
        setIsLoading(false);
      });
  }, [region]);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <PopularListArea
        videos={videos}
        allRegions={allRegions}
        setRegion={setRegion}
      />
    </div>
  );
}
