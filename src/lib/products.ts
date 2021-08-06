import * as fs from 'fs'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import path from 'path'

export type ProductContent = {
  readonly title: string
  readonly basket_size: string
  readonly basket_type: string
  readonly invoice_type: string
  readonly image: string
  readonly price: number
  readonly url: string
}

let productCache: ProductContent[]

export function fetchProductContent(
  productsDirectory: string
): ProductContent[] {
  if (productCache) {
    return productCache
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(productsDirectory)
  const allPostsData = fileNames
    .filter((it) => it.endsWith('.md'))
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
        basket_size: string
        basket_type: string
        invoice_type: string
        image: string
        price: number
        url: string
      }

      return matterData
    })
  // Sort posts by date
  productCache = allPostsData.sort((a, b) => {
    if (a.price > b.price) {
      return 1
    } else {
      return -1
    }
  })
  return productCache
}
