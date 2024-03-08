import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface Props {
  content: string;
  inline: boolean;
}

const Markdown = ({ content, inline }: Props) => (
  <ReactMarkdown
    // @ts-ignore
    components={{ p: inline ? React.Fragment : 'p' }}
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
  >
    {content}
  </ReactMarkdown>
);
export default Markdown;
