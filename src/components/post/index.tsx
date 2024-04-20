interface PostProps {
  author: string
  content: string
}
export function Post({ author, content }: PostProps) {
  return (
    <div>
      <span>{author}</span>
      <p>{content}</p>
    </div>
  )
}
