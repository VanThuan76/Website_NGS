import { YNG_YourNextGen_solution } from '@/mocks/website/YNG/YNG_YourNextGen/solution';
import YNGYourNextGenSolutionItem from './YNG_YourNextGen_solution_item';

const YNGYourNextGenSolution = () => {
  return (
    <section
      id='YNGYourNextGenSolution'
      className='w-full'
    >
      <div className='w-full mx-auto my-auto mt-10 flex flex-col justify-between items-center gap-24'>
        {YNG_YourNextGen_solution.map((item, idx) => (
          <YNGYourNextGenSolutionItem key={idx} item={item} className={`${idx % 2 !== 0 ? "bg-[#F9F9F9]": ""}`} />
        ))}
      </div>
    </section>
  );
};

export default YNGYourNextGenSolution;
