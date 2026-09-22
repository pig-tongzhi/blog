interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '个人博客',
    description: `基于 Next.js、MDX 和 Tailwind CSS 的中文个人博客，用来沉淀文章、项目和长期写作。`,
    imgSrc: '/static/images/twitter-card.png',
    href: '/',
  },
  {
    title: 'Java 工程笔记',
    description: `记录后端工程中的边界设计、性能优化、部署实践和可维护性判断。`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/how-i-write-java-services',
  },
]

export default projectsData
