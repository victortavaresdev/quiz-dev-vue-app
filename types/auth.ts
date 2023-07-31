interface UserProps {
  id: string
  name: string
  bio: string | null
  image: string | null
}

interface LoginProps {
  email: string
  password: string
}

interface RegisterProps {
  name: string
  email: string
  password: string
}

type UpdateUserProps = Partial<UserProps>
