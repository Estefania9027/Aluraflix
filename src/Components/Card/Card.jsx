import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  CardActions,
  CardContainer,
  CardImage,
  IconButton,
} from "./Card.styled";

import { useVideoContext } from "../../Contexts/VideoContext";
import EditCardModal from "./EditCardModal"; 

const Card = ({ video }) => {
  const { deleteVideo } = useVideoContext();
  const [isEditing, setIsEditing] = useState(false); 

  return (
    <>
      <CardContainer>
        <CardImage src={video.img} alt={video.title} />
        <CardActions>
          <IconButton onClick={() => deleteVideo(video.id)}>
            <FaTrashAlt />
          </IconButton>
          <IconButton onClick={() => setIsEditing(true)}> {}
            <FaEdit />
          </IconButton>
        </CardActions>
      </CardContainer>

      {isEditing && (
        <EditCardModal
          video={video}
          onClose={() => setIsEditing(false)}
        />
      )}
    </>
  );
};

export default Card;