import Link from 'next/link';

interface Props {
  title: string;
  info: string[];
}
const InforFooter = ({ title, info }: Props) => {
  return (
    <ul className='flex flex-col items-start justify-start'>
      <h2 className='mb-3 font-medium'>{title}</h2>
      {info.map((item, inx) => (
        <Link href={'#'} key={inx}>
          <li className='mb-2 font-thin'>{item}</li>
        </Link>
      ))}
    </ul>
  );
};

export default InforFooter;
