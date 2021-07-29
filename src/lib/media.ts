import * as fs from 'fs'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import path from 'path'

const mediaDirectory = path.join(process.cwd(), '/content/media')

export type MediaContent = {
  readonly title: string
  readonly image: string
  readonly url: string
  readonly date: Date
}

let mediaCache: MediaContent[]

export function fetchMediaContent(): MediaContent[] {
  if (mediaCache) {
    return mediaCache
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(mediaDirectory)
  const allMediaData = fileNames
    .filter((it) => it.endsWith('.md'))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(mediaDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      })

      const matterData = matterResult.data as {
        title: string
        image: string
        url: string
        date: Date
      }

      return matterData
    })

  mediaCache = allMediaData

  return mediaCache
}
