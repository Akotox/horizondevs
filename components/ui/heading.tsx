interface HeadingProps {
  text: string; 
}


export default function Heading({ text }: HeadingProps) {
  return <h2 className="text-2xl font-bold">{text}</h2>;
};

