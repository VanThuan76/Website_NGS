interface Props {
  content: string;
  className: string;
}

const TeamDesignOneItem = ({ content, className }: Props) => {
  return (
    <div
      className={`w-full h-full flex flex-col justify-between items-start p-3 cursor-pointer overflow-hidden border-collapse ${className}`}
    >
      <p className='text-sm md:text-base'>{content.length > 300 ? `${content.substring(0, 250)}...` : content}</p>
    </div>
  );
};

export default TeamDesignOneItem;
