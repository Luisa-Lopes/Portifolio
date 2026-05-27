import type { ProjectMedia as ProjectMediaType } from "./Project";

const ProjectPlaceholder = ({
  area,
  index,
}: {
  area: string;
  index: number;
}) => {
  return (
    <div className={`project-visual visual-${index % 4}`} aria-hidden="true">
      <span>{area}</span>
      <div className="visual-screen">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
};

const ProjectMedia = ({
  media,
  area,
  index,
}: {
  media?: ProjectMediaType;
  area: string;
  index: number;
}) => {
  if (!media) {
    return <ProjectPlaceholder area={area} index={index} />;
  }

  return (
    <figure className="project-media">
      {media.type === "image" ? (
        <img src={media.src} alt={media.alt} loading="lazy" />
      ) : (
        <video
          src={media.src}
          poster={media.poster}
          controls
          playsInline
          preload="metadata"
          aria-label={media.alt}
        />
      )}
      {media.caption ? <figcaption>{media.caption}</figcaption> : null}
    </figure>
  );
};

export default ProjectMedia;
