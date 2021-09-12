import { randBeetwen } from 'Core/Utils'
import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Container } from '../Container'

const SkeletonWrapper: FC = ({ children }) => (
  <div className="flex self-center content-center">{children}</div>
)

export const PageLoader: FC = () => {
  const skeletonsWidths: number[] = Array.from(
    { length: randBeetwen(3, 10) },
    () => randBeetwen(100, 500),
  )

  return (
    <div className="h-screen overflow-hidden">
      <Container>
        <div className="a-main-shadowed rounded-b-2xl h-16 flex justify-between px-4">
          <Skeleton circle height={50} width={50} />
          <div className="flex gap-x-4 self-center">
            <Skeleton wrapper={SkeletonWrapper} height={24} width={90} />
            <Skeleton wrapper={SkeletonWrapper} height={24} width={90} />
          </div>
        </div>
      </Container>
      <Container className="py-6 h-full">
        <div className="a-main-shadowed flex flex-col gap-y-4 p-8 sm:rounded-2xl h-5/6">
          {skeletonsWidths.map(width => (
            <Skeleton
              key={width}
              wrapper={SkeletonWrapper}
              height={24}
              width={width}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}
