import { useState, ChangeEvent, FormEvent, InvalidEvent } from 'react'
import { Comment } from '../comment'
import { Avatar } from '../avatar'
import { format, formatDistanceToNow } from 'date-fns'
import { pt } from 'date-fns/locale/pt'

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

export interface PostType {
  id: number
  author: Author
  publisheaAt: Date
  content: Content[]
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(['Jecilia'])
  const [newCommentText, setNewCommentText] = useState('')
  const isNewCommentEmpty = newCommentText.length === 0

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault()
    setComments([newCommentText, ...comments])
    setNewCommentText('')
  }

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(event.target.value)
    event.target.setCustomValidity('')
  }

  const handleNewCommentInvalid = (
    event: InvalidEvent<HTMLTextAreaElement>,
  ) => {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeleteOne = comments.filter(
      (comment) => comment !== commentToDelete,
    )
    setComments(commentsWithoutDeleteOne)
  }

  const publishedDateFormatted = format(
    post.publisheaAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: pt },
  )

  const publishedAtDateRelativeToNow = formatDistanceToNow(post.publisheaAt, {
    locale: pt,
    addSuffix: true,
  })

  return (
    <article className="rounded-lg bg-gray800 p-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar src={post.author.avatarUrl} variant="post" />
          <div className="flex flex-col">
            <strong className="leading-6 text-gray100">
              {post.author.name}
            </strong>
            <span className="text-sm leading-6 text-gray400">
              {post.author.role}
            </span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={post.publisheaAt.toISOString()}
          className="text-sm text-gray400"
        >
          {publishedAtDateRelativeToNow}
        </time>
      </header>
      <div className="mt-6 leading-6 text-gray300">
        {post.content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={index} className="text-green300">
                <a href="#">{line.content}</a>
              </p>
            )
          }
          return null
        })}
      </div>
      <form
        onSubmit={handleCreateNewComment}
        className="mt-6 w-full border-t border-gray600 pt-6"
      >
        <strong className="leading-6 text-gray100">Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          className="mt-4 h-24 w-full resize-none rounded-lg border-0 bg-gray900 p-4 leading-6 text-gray100 focus:outline-none focus:outline-green500"
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <button
          type="submit"
          disabled={isNewCommentEmpty}
          className={`} mt-4 rounded-lg border-0 bg-green500 px-6 py-4 font-bold text-white duration-1000 focus:outline-none
          focus:outline-green500 ${isNewCommentEmpty ? 'sr-only' : 'visible'}`}
        >
          Publicar
        </button>
      </form>
      <div className="mt-8">
        {comments.map((comment, index) => (
          <Comment
            key={index}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
