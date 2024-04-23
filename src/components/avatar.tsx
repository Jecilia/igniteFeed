import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const img = tv({
  base: 'size-12 rounded-lg',
  variants: {
    variant: {
      post: 'box-content border-4 border-green500 outline-4 outline-gray-800',
      comment: '',
    },
  },
  defaultVariants: {
    variant: 'comment',
  },
})
export type AvatarProps = ComponentProps<'img'> & VariantProps<typeof img>
export function Avatar({ variant, ...props }: AvatarProps) {
  return (
    <img alt="Deve ser uma pessoa" className={img({ variant })} {...props} />
  )
}
