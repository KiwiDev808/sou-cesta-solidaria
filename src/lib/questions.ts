import * as fs from 'fs'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import path from 'path'

const questionsDirectory = path.join(process.cwd(), '/content/questions')

export type questionsContent = {
  readonly title: string
  readonly body: string
}

let questionCache: questionsContent[]

export function fetchQuestionContent(): questionsContent[] {
  if (questionCache) {
    return questionCache
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(questionsDirectory)
  const allQuestionsData = fileNames
    .filter((it) => it.endsWith('.md'))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(questionsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      })

      const matterData = matterResult.data as {
        title: string
        body: string
      }

      return matterData
    })
  // Sort posts by date
  questionCache = allQuestionsData
  return questionCache
}
