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
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        className="h-1/2"
        viewBox="0 0 333.148 333.148"
        xmlSpace="preserve">
        <path
          style={{ fill: '#8597e2' }}
          d="M167.108,311.903L26.159,183.633c-4.505-4.803-8.556-10.126-12.029-15.824
			c-3.425-5.615-6.277-11.606-8.485-17.811C1.903,139.467,0,128.607,0,117.711c0-53.195,43.272-96.466,96.466-96.466
			c26.779,0,52.031,11.069,70.111,30.204c18.074-19.136,43.331-30.204,70.111-30.204c53.189,0,96.46,43.272,96.46,96.466
			c0,10.711-1.838,21.403-5.454,31.774c-2.309,6.599-5.346,12.972-9.046,18.927c-3.109,5.012-6.695,9.762-10.663,14.124
			l-0.758,0.764L167.108,311.903z"
        />
      </svg>
    </button>
    <h1 className="prose-2xl font-black font-sans text-primary self-center">
      mnik01
    </h1>
  </button>
)
