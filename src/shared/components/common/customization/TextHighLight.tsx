interface Props {
  text: string;
  className?: string;
}
const TextHighLight = ({ text, className }: Props) => {
  return <p className={`my-3 cursor-pointer text-sm text-[var(--blue-color-300)] ${className}`}>{text}</p>;
};

export default TextHighLight;
