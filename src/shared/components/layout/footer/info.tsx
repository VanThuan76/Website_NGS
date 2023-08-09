import Link from "next/link";

interface Props {
  title: string;
  info: string[];
}
const InforFooter = ({ title, info }: Props) => {
  return (
    <ul className="flex flex-col justify-start items-start">
      <h2 className="font-medium mb-3">{title}</h2>
      {info.map((item, inx) => (
        <Link href={"#"} key={inx}>
          <li className="mb-2 font-thin">{item}</li>
        </Link>
      ))}
    </ul>
  );
};

export default InforFooter;
