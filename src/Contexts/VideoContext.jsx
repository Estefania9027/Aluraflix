import { createContext, useContext, useEffect, useState } from "react";
import {
  getVideos,
  createVideo as addVideoService,
  deleteVideo as deleteVideoService,
  updateVideo as updateVideoService,
} from "../Services/api";

const VideosContext = createContext();

export const useVideoContext = () => useContext(VideosContext);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingAction, setLoadingAction] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);
      try {
        const videoData = await getVideos();
        setVideos(videoData);
      } catch (error) {
        console.error("Error al cargar videos:", error);
        setError("No se pudieron cargar los videos.");
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const addVideo = async (newVideo) => {
    setLoadingAction(true);
    setError(null);
    try {
      const addedVideo = await addVideoService(newVideo);
      setVideos((prevVideos) => [...prevVideos, addedVideo]);
    } catch (error) {
      console.error("Error al agregar video:", error);
      setError("No se pudo agregar el video.");
    } finally {
      setLoadingAction(false);
    }
  };

  const deleteVideo = async (videoId) => {
    setLoadingAction(true);
    setError(null);
    try {
      await deleteVideoService(videoId);
      setVideos((prevVideos) =>
        prevVideos.filter((video) => video.id !== videoId)
      );
    } catch (error) {
      console.error("Error al eliminar video:", error);
      setError("No se pudo eliminar el video.");
    } finally {
      setLoadingAction(false);
    }
  };

  const updateVideo = async (videoId, updatedVideo) => {
    setLoadingAction(true);
    setError(null);
    try {
      const updatedData = await updateVideoService(videoId, updatedVideo);
      setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === videoId ? { ...video, ...updatedData } : video
        )
      );
    } catch (error) {
      console.error("Error al actualizar video:", error);
      setError("No se pudo actualizar el video.");
    } finally {
      setLoadingAction(false);
    }
  };

  const videoCategory = videos.reduce((categories, video) => {
    const category = video.categoria || "Sin categoría";
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(video);
    return categories;
  }, {});

  return (
    <VideosContext.Provider
      value={{
        videos,
        loading,
        loadingAction,
        error,
        videoCategory,
        addVideo,
        deleteVideo,
        updateVideo,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};