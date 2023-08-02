interface LeaderboardProps {
  id: string
  user: string
  image: string | null
  totalQuizzes: number
  totalScore: number
}

interface PaginationMeta {
  current_page: number
  from: number
  last_page: number
  path: string
  links: PaginationMetaLink[]
  per_page: number
  to: number
  total: number
}

interface PaginationMetaLink {
  active: boolean
  label: string
  url: string | null
}
