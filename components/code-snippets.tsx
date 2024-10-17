import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeSnippetProps {
  code: string;
  language?: string; // Optional, defaults to "javascript"
  heading: string; // Optional, defaults to "Code Snippet"
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = "javascript", heading }) => {
  return (
    <div className="bg-gray-900/25 rounded-lg p-4 overflow-auto">
      <h3 className="text-lg font-semibold text-white mb-2 p-4">{heading}</h3>

      <SyntaxHighlighter language={language} style={dracula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
