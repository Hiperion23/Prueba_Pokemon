import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: {
    Authorization: import.meta.env.VITE_PEXELS_API_KEY,
  },
})

export const buscarImagen = async (query: string): Promise<string | null> => {
  try {
    const res = await api.get('/search', {
      params: {
        query,
        per_page: 1,
      },
    })
    return res.data.photos?.[0]?.src?.original || null
  } catch (err) {
    console.error('Error al buscar imagen en Pexels:', err)
    return null
  }
}
