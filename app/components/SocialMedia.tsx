import GithubIcon from '@/icons/GithubIcon';
import LinkedinIcon from '@/icons/LinkedinIcon';
import MailIcon from '@/icons/MailIcon';

const SocialMedia = () => {
  return (
    <ul className="absolute bottom-0 flex h-20 w-full items-center justify-center gap-5 bg-gradient-to-b from-transparent to-background-main">
      <li>
        <a href="mailto:jechavezch@gmail.com?subject=Regarding your web portfolio">
          <MailIcon />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/javier-echavez-chardaux/">
          <LinkedinIcon />
        </a>
      </li>
      <li>
        <a href="https://github.com/jech33">
          <GithubIcon />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
