import fs from 'fs'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import path from 'path'

const productsDirectory = path.join(process.cwd(), '/content/products')

export type ProductContent = {
  readonly title: string
  readonly quantity: number
  readonly thumbnail: string
  readonly price: number
  readonly url: string
}

let productCache: ProductContent[]

export function fetchPostContent(): ProductContent[] {
  if (productCache) {
    return productCache
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(productsDirectory)
  const allPostsData = fileNames
    .filter((it) => it.endsWith('.mdx'))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(productsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      })

      const matterData = matterResult.data as {
        title: string
        quantity: number
        thumbnail: string
        price: number
        url: string
      }

      return matterData
    })
  // Sort posts by date
  productCache = allPostsData.sort((a, b) => {
    if (a.price < b.price) {
      return 1
    } else {
      return -1
    }
  })
  return productCache
}
