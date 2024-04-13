import { cn } from "@/lib/utils";

interface ImageSkeletonProp {
  size: 'small' | 'large';
  templateStyle?: 'one' | 'two' | 'four';
}

export const ImageSkeleton: React.FC<ImageSkeletonProp> = ({ size, templateStyle }) => (

  <div className={cn(
    `relative h-[105px] rounded-xl bg-gray-700 dark:bg-gray-500 animate-pulse`,
    size === 'large' && templateStyle === 'one' && 'h-[405px]',
    size === 'small' && templateStyle === 'one' && 'h-[200px]',
  )} />
)
