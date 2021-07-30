import * as fs from 'fs'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import path from 'path'

export type MediaContent = {
  readonly title: string
  readonly image: string
  readonly url: string
  readonly date: Date
}

let mediaCache: MediaContent[]

export function fetchMediaContent(mediaDirectory: string): MediaContent[] {
  if (mediaCache) {
    return mediaCache
  }
  const fileNames = fs.readdirSync(mediaDirectory)
  const allMediaData = fileNames
    .filter((it) => it.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(mediaDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

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
