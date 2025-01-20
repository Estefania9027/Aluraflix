import React from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import Card from "../Card/Card";
import { CategoryContainer, CategoryTitle, VideoList } from "./CategoryVideos.styled";

const CategoryVideos = () => {
  const { videoCategory } = useVideoContext();

  return (
    <div>
      {Object.keys(videoCategory).map((category) => (
        <CategoryContainer key={category}>
          <CategoryTitle category={category}>{category}</CategoryTitle>
          <VideoList>
            {videoCategory[category].map((video) => (
              <Card key={video.id} video={video} />
            ))}
          </VideoList>
          </CategoryContainer>
      ))}
    </div>
  );
};

export default CategoryVideos;
