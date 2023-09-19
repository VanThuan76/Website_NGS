interface Props {
  title: string;
  name: string;
  description: string;
  findMore: boolean;
  className?: string
}
const TitleSection = (data: Partial<Props>) => {
  return (
    <div className='max-w-[1440px] w-full mx-auto my-auto flex flex-col gap-4 mt-5'>
      <p className={`text-sm md:text-2xl text-orange-500 ${data.className}`}>{data.title}</p>
      <div className={`w-full gap-[40px] ${data.className}`}>
        <h1 className={`text-2xl md:text-[40px] leading-[48px] w-1/2 font-medium ${data.className}`}>{data.name}</h1>
        {data.findMore ? (
          <p className={`text-sm md:text-base font-medium not-italic mb-10 w-[650px] text-[#757575] dark:text-[#C2C0BF] ${data.className}`}>
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
