import Link from "next/link";

type Props = {
  children: React.ReactNode;
  path: string
};
const UseNextLink = ({ children, path }: Props) => {
  return (
    <Link href={path} className='cursor-pointer' target="_blank">
      {children}
    </Link>
  );
};

export default UseNextLink;
