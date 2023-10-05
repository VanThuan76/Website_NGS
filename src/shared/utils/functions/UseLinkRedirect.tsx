import { Link } from 'react-scroll';

type Props = {
  children: React.ReactNode;
  sectionCode: string;
};
const UseLinkRedirect = ({ children, sectionCode }: Props) => {
  return (
    <Link to={sectionCode} smooth={true} duration={300} spy={true} offset={-100} className='cursor-pointer'>
      {children}
    </Link>
  );
};

export default UseLinkRedirect;
