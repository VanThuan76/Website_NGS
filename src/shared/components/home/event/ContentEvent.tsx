import IconLocation from '@/components/icon/event/IconLocation';
import IconSchedule from '@/components/icon/event/IconSchedule';
import { IEvent } from '@/mocks/event';
interface Props {
  event: IEvent;
}
const ContentEvent = ({ event }: Props) => {
  return (
    <div className='absolute bottom-0 right-0 w-full h-1/2 bg-[#1B1D35] p-5 flex flex-col justify-between items-start gap-3'>
      <div className='flex flex-col justify-start items-start'>
        <h3>{event.title}</h3>
        <p className='pl-5 text-orange-400'>
          {' '}
          <span className='mr-2'>•</span> {event.channel}
        </p>
      </div>
      <h1 className='text-3xl min-w-1/2'>{event.description}</h1>
      <div className='flex flex-col justify-start items-start gap-3'>
        <div className='flex justify-center items-center gap-3'>
          <IconSchedule />
          <p>{event.time}</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <IconLocation />
          <p>{event.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentEvent;
