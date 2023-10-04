import IconLocation from '@/components/icon/HO/event/IconLocation';
import IconSchedule from '@/components/icon/HO/event/IconSchedule';
import { IEvent } from '@/mocks/website/HO/event';
import { useTheme } from 'next-themes';
interface Props {
  event: Partial<IEvent>;
  className?: string;
}
const HOEventContent = ({ event, className }: Props) => {
  const { theme } = useTheme();
  const colorIcon = theme !== 'dark' ? '#000' : '#fff';

  return (
    <div
      className={`absolute bottom-0 right-0 flex h-1/2 w-full flex-col items-start justify-between gap-3 rounded-b-lg bg-white p-5 dark:bg-[#1B1D35] ${className}`}
    >
      <div className='flex flex-col items-start justify-start'>
        <h2 className='text-base md:text-xl lg:text-2xl'>{event.title}</h2>
        <p className='pl-5 text-orange-400'>
          <span className='mr-2 text-sm md:text-base lg:text-xl'>•</span> {event.channel}
        </p>
      </div>
      <h1 className='min-w-1/2 text-sm md:text-base'>{event.description}</h1>
      <div className='flex flex-col items-start justify-start gap-3'>
        <div className='flex items-center justify-center gap-3'>
          <IconSchedule color={colorIcon} />
          <p>{event.time}</p>
        </div>
        <div className='flex items-center justify-center gap-3'>
          <IconLocation color={colorIcon} />
          <p>{event.address}</p>
        </div>
      </div>
    </div>
  );
};

export default HOEventContent;
