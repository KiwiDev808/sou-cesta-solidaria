import * as fs from 'fs'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import path from 'path'
import { Remarkable } from 'remarkable'

export type QuestionContent = {
  readonly title: string
  readonly body: string
}

let questionCache: QuestionContent[]

export function fetchQuestionContent(
  questionsDirectory: string
): QuestionContent[] {
  if (questionCache) {
    return questionCache
  }

  let md = new Remarkable()

  const fileNames = fs.readdirSync(questionsDirectory)
  const allQuestionsData = fileNames
    .filter((it) => it.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(questionsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      })

      const matterData = {
        title: matterResult.data?.title,
        body: md.render(matterResult.content),
      } as {
        title: string
        body: string
      }

      return matterData
    })
  questionCache = allQuestionsData
  return questionCache
}
