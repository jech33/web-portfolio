/** Assets */
import GithubIcon from '@/_assets/GithubIcon';
import LinkedinIcon from '@/_assets/LinkedinIcon';
import MailIcon from '@/_assets/MailIcon';

const SocialMedia = () => {
  return (
    <ul className="absolute bottom-0 flex h-28 w-full items-end justify-center gap-5 bg-gradient-to-t from-background-main from-50% pb-6">
      <li>
        <a
          className="[&>svg>path]:transition-all [&>svg>path]:duration-200 [&>svg>path]:hover:fill-secondary-main [&>svg>path]:active:fill-secondary-light [&>svg]:transition-all [&>svg]:active:scale-105"
          href="mailto:jechavezch@gmail.com?subject=Regarding your web portfolio"
          aria-label="email"
        >
          <MailIcon />
        </a>
      </li>
      <li>
        <a
          className="[&>svg>g>path]:transition-all [&>svg>g>path]:duration-200 [&>svg>g>path]:hover:fill-secondary-main [&>svg>g>path]:active:fill-secondary-light [&>svg]:transition-all [&>svg]:active:scale-105"
          target="_blank"
          href="https://www.linkedin.com/in/javier-echavez-chardaux/"
          aria-label="linkedin"
        >
          <LinkedinIcon />
        </a>
      </li>
      <li>
        <a
          className="[&>svg>g>path]:transition-all [&>svg>g>path]:duration-200 [&>svg>g>path]:hover:fill-secondary-main [&>svg>g>path]:active:fill-secondary-light [&>svg]:transition-all [&>svg]:active:scale-105"
          target="_blank"
          href="https://github.com/jech33"
          aria-label="github"
        >
          <GithubIcon />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
