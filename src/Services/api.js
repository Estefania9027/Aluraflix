import axios from "axios";

const api = axios.create({
  baseURL: "https://678d27fff067bf9e24e97738.mockapi.io/",
  timeout: 5000,
});

export const getVideos = async () => {
  try {
    const response = await api.get("/videos");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los videos:", error);
    throw new Error("No se pudieron obtener los videos. Intente de nuevo.");
  }
};

export const getVideoById = async (id) => {
  try {
      const response = await api.get(`/videos/${id}`);
      return response.data;
  } catch (error) {
      console.error(`Error al obtener el video con ID ${id}:`, error);
      throw error;
  }
};

export const createVideo = async (video) => {
    try {
        const response = await api.post('/videos', video);
        return response.data;
    } catch (error) {
        console.error('Error al crear un nuevo video:', error);
        throw error;
    }
};

export const updateVideo = async (id, video) => {
  try {
      const response = await api.put(`/videos/${id}`, video);
      return response.data;
  } catch (error) {
      console.error(`Error al actualizar el video con ID ${id}:`, error);
      throw error;
  }
};

export const deleteVideo = async (id) => {
  try {
      const response = await api.delete(`/videos/${id}`);
      return response.data;
  } catch (error) {
      console.error(`Error al eliminar el video con ID ${id}:`, error);
      throw error;
  }
};

export default api;
