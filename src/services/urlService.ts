import { generateId, baseUrl } from "../utils/idGenerator.js"

const urlDatabase: Record<string, string> = {}

export const encode = (originalUrl: string): string => {
  const id = generateId()
  const shortUrl = `${baseUrl}/${id}}`
  urlDatabase[shortUrl] = originalUrl
  return shortUrl
}

export const decode = (shortUrl: string): string | null => {
  return urlDatabase[shortUrl] || null
}
