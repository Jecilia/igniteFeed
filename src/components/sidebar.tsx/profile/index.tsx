import { Avatar } from '../../avatar'

export function Profile() {
  return (
    <div className="-mt-8 flex flex-col items-center">
      <Avatar src="https://github.com/jecilia.png" variant="post" />
      <strong className="mt-4 leading-6 text-gray100">Jecilia Teixeira</strong>
      <span className="text-sm leading-6 text-gray400">
        Front-End Developer
      </span>
    </div>
  )
}
