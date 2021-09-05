import clsx from 'clsx'
import { FC, MouseEventHandler } from 'react'

export interface LogoProps {
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Logo: FC<LogoProps> = ({ className, onClick = () => {} }) => (
  <button className="flex gap-4" onClick={onClick} type="button">
    <button type="button" className={clsx('btn btn-circle', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-6 h-6 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <h1 className="prose-2xl font-black font-sans text-primary self-center">
      mnik01
    </h1>
  </button>
)
