import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import HomeSecurityCard from './HO_security_card';
type Props = {
  data: Partial<IBaseSectionComponent>;
};
const HomeSecurityResponsive = ({data}: Props) => {
  return (
    <div className='max-w-[1440px] w-full my-auto flex lg:hidden flex-col justify-between items-center lg:items-end gap-5 mt-10 mx-auto'>
      <div className='grid grid-cols-2 justify-end items-end gap-2 md:grid-cols-3 md:gap-3'>
        {data.components!.map((item , index) => <HomeSecurityCard title={item.title} image={item.image}  key={index} className='col-span-1' /> )}

      </div>
    </div>
  );
};

export default HomeSecurityResponsive;
