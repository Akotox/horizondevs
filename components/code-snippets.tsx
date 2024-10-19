import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeSnippetProps {
  code: string;
  language?: string; // Optional, defaults to "javascript"
  heading: string; // Required heading
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  code,
  language = "javascript",
  heading,
}) => {
  return (
    <div className="bg-gray-900/25 rounded-lg ">
      <h5 className="text-lg font-semibold py-2  text-gray-400">{heading}</h5>
      <div className="overflow-auto mb-8">
        <SyntaxHighlighter
          language={language}
          style={dracula}
          wrapLines={true}
          customStyle={{ fontSize: '13px', borderRadius: '8px' }} // Default font size
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSnippet;
