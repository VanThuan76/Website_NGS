interface Props {
  title: string;
  description: string;
  findMore: boolean;
  className?: string
}
const TitleSection = (data: Props) => {
  return (
    <div className='w-full flex flex-col gap-3 mt-5'>
      <p className='text-2xl xl:text-3xl text-orange-500'>{data.title}</p>
      <div className={`w-full ${data.className}`}>
        <h1 className={`text-2xl xl:text-2xl w-1/2 ${data.className}`}>{data.description}</h1>
        {data.findMore ? (
          <p className={`text-xs md:text-sm lg:text-base w-1/4 dark:text-[#C2C0BF] ${data.className}`}>
            NGS (Next-Generation Solutions) là NGS nỗ lực trở thành doanh nghiệp hàng đầu Việt Nam, cung cấp các giải
            pháp; dịch vụ thông minh; đem lại giá trị lớn và phù hợp nhất.
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TitleSection;
