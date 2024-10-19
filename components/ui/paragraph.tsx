interface ParagraphProps {
    content: string; // The text content for the paragraph
  }
  
  export default function Paragraph({ content }: ParagraphProps) {
    return <p className="my-7 font-[13px]">{content}</p>;
  }
  