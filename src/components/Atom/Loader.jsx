import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Loader = () => {
  return (
    <div className="card h-[300px]">
      <SkeletonTheme baseColor="rgba(3, 12, 27,0.5)" highlightColor="rgb(43, 41, 98)">
        <Skeleton style={{ borderRadius: 8 }} height={250} />
      </SkeletonTheme>
    </div>
  )
}

export default Loader
