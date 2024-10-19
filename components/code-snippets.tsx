import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeSnippetProps {
  code: string;
  language?: string; // Optional, defaults to "javascript"
  heading: string; // Required heading
  imageUrl?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  code,
  language = "javascript",
  heading,
  imageUrl
}) => {
  return (
    <div className="bg-gray-900/25 rounded-lg">
    <h5 className="text-lg font-semibold py-2 text-gray-400">{heading}</h5>
    
    {/* Show code on larger screens */}
    <div className="hidden sm:block overflow-auto mb-8">
      <SyntaxHighlighter
        language={language}
        style={dracula}
        wrapLines={true}
        customStyle={{ fontSize: '13px', borderRadius: '8px' }} // Default font size
      >
        {code}
      </SyntaxHighlighter>
    </div>

    {/* Show image on small screens */}
    <div className="sm:hidden mb-8">
      <img src={imageUrl!} alt="Description" className="w-full rounded-lg" />
    </div>
  </div>
  );
};

export default CodeSnippet;
