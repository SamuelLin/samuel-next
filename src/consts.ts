import type { Site, Metadata, Socials } from '@/types'

export const SITE: Site = {
  NAME: 'Samuel Lin',
  EMAIL: 'samuelhsnu@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 1,
  NUM_WORKS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 3
}

export const HOME: Metadata = {
  TITLE: 'Home',
  DESCRIPTION:
    'Samuel Lin - Frontend Developer with 8+ years of experience in React, Vue.js, and React Native. Passionate about code quality, team collaboration, and creating exceptional user experiences.'
}

export const BLOG: Metadata = {
  TITLE: 'Blog',
  DESCRIPTION: 'A collection of articles on topics I am passionate about.'
}

export const WORK: Metadata = {
  TITLE: 'Work',
  DESCRIPTION: 'Where I have worked and what I have done.'
}

export const SOCIALS: Socials = [
  {
    NAME: 'linkedin',
    HREF: 'https://www.linkedin.com/in/samuelhsnu/'
  },
  {
    NAME: 'github',
    HREF: 'https://github.com/SamuelLin'
  }
]
