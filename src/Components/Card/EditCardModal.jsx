import React, { useState } from "react";
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  Input,
  TextArea,
  Select,
  ButtonContainer,
} from "./EditCardModal.styled"; 

import { useVideoContext } from "../../Contexts/VideoContext";
import Button from "../../Components/Button/Button";

const EditCardModal = ({ video, onClose }) => {
  const { updateVideo } = useVideoContext();
  const [titulo, setTitulo] = useState(video.titulo || "");
  const [categoria, setCategoria] = useState(video.categoria || "");
  const [img, setImg] = useState(video.img || "");
  const [videoUrl, setVideoUrl] = useState(video.video || "");
  const [descripcion, setDescripcion] = useState(video.descripcion || "");

  // Manejar guardar
  const handleSave = () => {
    const updatedVideo = {
      ...video,
      titulo,
      categoria,
      img,
      video: videoUrl,
      descripcion,
    };
    updateVideo(video.id, updatedVideo);
    onClose();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>EDITAR CARD:</ModalTitle>
        <Input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <Select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Seleccionar categoría</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="design">Design</option>
        </Select>
        <Input
          type="text"
          placeholder="Imagen"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Video"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <TextArea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <ButtonContainer>
        <Button onClick={handleSave}>GUARDAR</Button>
        <Button onClick={onClose}>CANCELAR</Button>
        </ButtonContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default EditCardModal;