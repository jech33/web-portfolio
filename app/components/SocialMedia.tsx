/** Assets */
import GithubIcon from '@/icons/GithubIcon';
import LinkedinIcon from '@/icons/LinkedinIcon';
import MailIcon from '@/icons/MailIcon';

const SocialMedia = () => {
  return (
    <ul className="absolute bottom-0 flex h-28 w-full items-end justify-center gap-5 bg-gradient-to-t from-background-main from-50% pb-6">
      <li>
        <a
          href="mailto:jechavezch@gmail.com?subject=Regarding your web portfolio"
          aria-label="email"
        >
          <MailIcon />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/javier-echavez-chardaux/"
          aria-label="linkedin"
        >
          <LinkedinIcon />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/jech33" aria-label="github">
          <GithubIcon />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
