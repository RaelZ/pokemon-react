import axios from 'axios'
import { API_URL } from '../config'

export const apiRequest = axios.create({ baseURL: API_URL })
