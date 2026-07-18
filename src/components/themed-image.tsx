import Image, {type StaticImageData} from 'next/image';

type ThemedImageProps = {
  alt: string;
  className?: string;
  darkSrc: StaticImageData;
  lightSrc: StaticImageData;
};

export function ThemedImage({
  alt,
  className,
  darkSrc,
  lightSrc,
}: ThemedImageProps) {
  return (
    <span className={['themed-image', className].filter(Boolean).join(' ')}>
      <Image
        className="themed-image__light"
        src={lightSrc}
        alt={alt}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 860px"
      />
      <Image
        className="themed-image__dark"
        src={darkSrc}
        alt={alt}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 860px"
      />
    </span>
  );
}
