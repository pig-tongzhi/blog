import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'

export const metadata = genPageMetadata({
  title: '记录',
  description: '按时间线整理的个人记录。',
})

export default function RecordsPage() {
  const records = allCoreContent(sortPosts(allBlogs))

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          记录
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          这里按时间线放所有写下来的内容：技术笔记、项目复盘、想法和长期观察。
        </p>
      </div>

      <ol className="relative border-l border-gray-200 pt-8 dark:border-gray-700">
        {records.map((record) => {
          const { path, date, title, summary, tags } = record

          return (
            <li key={path} className="mb-12 ml-6">
              <span className="bg-primary-500 absolute -left-1.5 mt-2 h-3 w-3 rounded-full" />
              <time
                dateTime={date}
                className="mb-2 block text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                {formatDate(date, siteMetadata.locale)}
              </time>
              <h2 className="text-2xl leading-8 font-bold tracking-tight">
                <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                  {title}
                </Link>
              </h2>
              <div className="mt-2 flex flex-wrap">
                {tags?.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">{summary}</p>
              <div className="mt-4 text-base leading-6 font-medium">
                <Link
                  href={`/${path}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`打开记录：${title}`}
                >
                  打开记录 &rarr;
                </Link>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
