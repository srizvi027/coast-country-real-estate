type Props = { scene: string; alt: string; image?: string; className?: string };

export default function Scene({ scene, alt, image, className = "" }: Props) {
  return (
    <div className={`ph ph-${scene} ${className}`.trim()} role="img" aria-label={alt}>
      {image ? <img src={image} alt={alt} loading="lazy" width={1200} height={800} /> : null}
    </div>
  );
}
