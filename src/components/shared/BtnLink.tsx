interface BtnLinkProps {
  href: string;
  text: string;
  classname?: string;
}

export const BtnLink = ({ href, text, classname = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`px-0 py-3 rounded-full outline-none relative overflow-hidden border dark:bg-violet-600 cursor-pointer transform transition duration-300 ${classname}`}
    >
      <span className="relative z-10 text-white">{text}</span>
    </a>
  );
};
// export const NavItem = ({ href, text }: NavItemProps) =
