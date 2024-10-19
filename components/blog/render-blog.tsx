import { Content, ContentType } from "@/lib/interfaces/blog";
import CodeSnippet from "../code-snippets";
import Heading from "../ui/heading";
import Paragraph from "../ui/paragraph";
import ImageDisplay from "../ui/image-display";

export const renderContent = (content: Content[]) => {
    return content.map((item, index) => {
        switch (item.contentType) {
            case ContentType.Code:
                return (
                    <CodeSnippet 
                        key={index} 
                        heading={item.heading|| "This is the code"} // Assuming you have a heading property for the CodeSnippet
                        code={item.content} // Use the content property for code
                        language={item.lang} // Assuming lang is part of the item
                    />
                );
            case ContentType.Heading:
                return (
                    <Heading key={index} text={item.content} />
                );
            case ContentType.PG:
                return (
                    <Paragraph key={index} content={item.content} />
                );
            case ContentType.Image:
                return (
                    <ImageDisplay 
                        key={index} 
                        src={item.imageUrl!} // Ensure you handle the optional image property
                    />
                );
            default:
                return null; // Handle unknown types
        }
    });
};
