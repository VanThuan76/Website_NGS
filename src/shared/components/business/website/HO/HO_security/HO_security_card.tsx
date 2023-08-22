import IconOne from '@/components/icon/HO/security/IconOne';

interface Props {
  className: string;
}
const HomeSecurityCard = ({ className }: Props) => {
  return (
    <div className={`px-12 md:px-16 xl:px-20 py-10 flex flex-col justify-center items-center dark:bg-[#222442] rounded-lg shadow-md ${className}`}>
      <IconOne />
      <p>SOC</p>
    </div>
  );
};

export default HomeSecurityCard;
