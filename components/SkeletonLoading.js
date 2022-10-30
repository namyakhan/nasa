import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoading = () => {
  return (
    <div className="rectangle w-[200px] h-[330px] lg:w-[330px] lg:h-[450px] mt-10 lg:mt-16">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton
          rectangle={true}
          className="w-[200px] h-[200px] lg:w-[30px] lg:h-[300px]"
        />
        <div className="p-2 lg:p-5">
          <h2 className="font-[600] text-[12px] md:text-[16px] lg:text-[20px]">
            <Skeleton />
          </h2>
          <h5 className="mt-1">
            <Skeleton />
          </h5>
          <h6 className="mt-1">
            <Skeleton />
          </h6>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonLoading;
