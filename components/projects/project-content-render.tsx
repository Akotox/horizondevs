import { ContentType } from '@/lib/interfaces/blog';
import React from 'react';// Adjust the path as needed
import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';
import ImageDisplay from '../ui/image-display';

interface ContentItem {
  contentType: ContentType;
  content?: string;
  imageUrl?: string;
}

interface ContentRendererProps {
  contentItems: ContentItem[];
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ contentItems }) => {
  return (
    <div>
      {contentItems.map((item, index) => {
        switch (item.contentType) {
          case ContentType.Heading:
            return <Heading key={index} text={item.content!} />;
          case ContentType.PG:
            return <Paragraph key={index} content={item.content!} />;
          case ContentType.Image:
            return <ImageDisplay key={index} src={item.imageUrl!} />;
          case ContentType.VIDEO:
            return <div key={index}/>; // Assuming content contains the video URL
        //   case ContentType.Code:
        //     return <CodeSnippet code={item.content.} heading={''} />; // Render code block if needed
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ContentRenderer;
