import Image from 'next/image';

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  position?: string;
};

export default function Photo({
  src, alt, className = '', priority = false, sizes = '(max-width: 640px) 100vw, 50vw', position,
}: PhotoProps) {
  return <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={className} style={position ? { objectPosition: position } : undefined} />;
}
