interface Props {
  title: string;
  name: string;
  description: string;
  findMore: boolean;
  className?: string
}
const TitleSection = (data: Partial<Props>) => {
  return (
    <div className='max-w-[1440px] w-full mx-auto my-auto flex flex-col gap-3 mt-5'>
      <p className={`text-sm md:text-2xl text-orange-500 ${data.className}`}>{data.title}</p>
      <div className={`w-full ${data.className}`}>
        <h1 className={`text-2xl md:text-4xl w-1/2 ${data.className}`}>{data.name}</h1>
        {data.findMore ? (
          <p className={`text-sm md:text-base w-1/4 dark:text-[#C2C0BF] ${data.className}`}>
            {data.description}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TitleSection;
