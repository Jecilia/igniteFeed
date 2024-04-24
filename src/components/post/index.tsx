import { useState } from 'react'
import { Comment } from '../comment'
import { Avatar } from '../avatar'
import { format, formatDistanceToNow } from 'date-fns'
import { pt } from 'date-fns/locale/pt'

interface PostProps {
  author: string
  content: string
  publisheaAt: Date
}
const comments = [1, 2, 3]
export function Post({ author, publisheaAt, content }: PostProps) {
  const comments = useState()
  const [isButtonVisible, setButtonVisible] = useState(false)

  const handleTextareaFocus = () => {
    setButtonVisible(true)
  }

  const handleTextareaBlur = () => {
    setButtonVisible(false)
  }
  const publishedDateFormateed = format(
    publisheaAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: pt },
  )

  const publisheaAtDateRelativeToNow = formatDistanceToNow(publisheaAt, {
    locale: pt,
    addSuffix: true,
  })
  function handleCreateNewComment() {
    event?.preventDefault()
    comments.push(3)
  }

  return (
    <article className="rounded-lg bg-gray800 p-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar src={author.avatarUrl} variant="post" />
          <div className=" flex flex-col">
            <strong className="leading-6 text-gray100">{author.name}</strong>
            <span className="text-sm leading-6 text-gray400">
              {author.role}
            </span>
          </div>
        </div>
        <time
          title={publishedDateFormateed}
          dateTime={publisheaAt.toISOString()}
          className="text-sm text-gray400"
        >
          {publisheaAtDateRelativeToNow}
        </time>
      </header>
      <div className="mt-6 leading-6 text-gray300">
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={content}>
                <a href="#">{line.content}</a>
              </p>
            )
          }
        })}
      </div>
      <form
        onSubmit={handleCreateNewComment}
        className="mt-6 w-full border-t border-gray600 pt-6"
      >
        <strong className="leading-6 text-gray100">Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentario "
          className="mt-4 h-24 w-full resize-none rounded-lg border-0 bg-gray900 p-4 leading-6 text-gray100 focus:outline-none focus:outline-green500"
          onFocus={handleTextareaFocus}
          onBlur={handleTextareaBlur}
        />
        <button
          type="submit"
          className={`mt-4 rounded-lg border-0 bg-green500 px-6 py-4 font-bold text-white duration-1000 hover:bg-green300 focus:outline-none focus:outline-green500 ${
            isButtonVisible ? ' visible' : 'sr-only'
          }`}
        >
          Publicar
        </button>
      </form>
      <div className="mt-8">
        {comments.map((comment) => {
          return <Comment key={comment} />
        })}
      </div>
    </article>
  )
}
