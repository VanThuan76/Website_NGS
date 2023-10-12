import { AnimationControls } from 'framer-motion';
import { IBaseSectionComponent } from 'src/shared/schemas/typedef/IBaseSectionComponent';
import HomeSecurityCard from './HOSecurityCard';
type Props = {
  data: Partial<IBaseSectionComponent>;
  sectionControls: AnimationControls;
};
const HOSecurityResponsive = ({ data, sectionControls }: Props) => {
  return (
    <div className='mx-auto my-auto mt-10 flex w-full max-w-[1440px] flex-col items-center justify-between gap-5 lg:hidden lg:items-end'>
      <div className='grid grid-cols-2 items-end justify-end gap-2 md:grid-cols-3 md:gap-3'>
        {data.components!.map((item, index) => (
          <HomeSecurityCard
            title={item.title}
            description={item.description}
            image={item.image}
            key={index}
            sectionControls={sectionControls}
            idx={index}
            slug={item.slug}
            isResponsive={true}
          />
        ))}
      </div>
    </div>
  );
};

export default HOSecurityResponsive;
