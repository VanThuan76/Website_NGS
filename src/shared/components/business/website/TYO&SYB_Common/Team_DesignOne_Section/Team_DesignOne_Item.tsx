import { motion } from 'framer-motion';

interface Props {
  content: string;
  className: string;
}

const TeamDesignOneItem = ({ content, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className={`flex h-full w-full border-collapse cursor-pointer flex-col items-start justify-between overflow-hidden p-3 ${className}`}
    >
      <p className='text-sm md:text-base'>{content.length > 300 ? `${content.substring(0, 250)}...` : content}</p>
    </motion.div>
  );
};

export default TeamDesignOneItem;
