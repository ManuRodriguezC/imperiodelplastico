import {z, defineCollection } from 'astro:content'

const productCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    slog: z.string(),
    description: z.string(),
    images: z.array(z.string())
  }) 
})

export const collections = {
  'products': productCollection,
}