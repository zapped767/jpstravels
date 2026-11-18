import type { ReactNode } from 'react';
import Photo from './Photo';

type PageCoverProps = {
  label: string;
  title: ReactNode;
  description: string;
  image?: string;
  position?: string;
  children?: ReactNode;
};

export default function PageCover({ label, title, description, image, position, children }: PageCoverProps) {
  return (
    <section className={`on-dark relative isolate overflow-hidden bg-deep text-white ${image ? 'flex min-h-[390px] items-end sm:min-h-[455px] lg:min-h-[500px]' : 'trail-art'}`}>
      {image && <>
        <Photo src={image} alt="" className="object-cover" position={position} sizes="100vw" priority />
        <div className="cover-tint absolute inset-0" aria-hidden="true" />
      </>}
      <div className="container-main relative pb-10 pt-12 sm:pb-14 sm:pt-16 lg:pb-[68px] lg:pt-20">
        <span className="eyebrow !mb-4 !text-yellow"><span className="h-px w-6 bg-current" />{label}</span>
        <h1 className="page-title">{title}</h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-white sm:text-[15px] sm:leading-8">{description}</p>
        {children && <div className="mt-6 flex flex-wrap items-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
