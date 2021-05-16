import api from "./api"

const find = (id) => api.get(`/cards/${id}`)

const findAll = (filters) => api.get("/cards", { params: filters })

export default {
  find,
  findAll
}