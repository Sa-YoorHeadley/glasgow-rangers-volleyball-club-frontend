import ReactMarkdown from "react-markdown";

const Markdown = ({ children }: { children: string }) => (
  <ReactMarkdown
    components={{
      p: ({ children }) => <p className="">{children}</p>,
      br: () => <br />,
      ul: ({ children }) => <ul className="pt-2">{children}</ul>,
      li: ({ children }) => <li className="ml-4 list-disc">{children}</li>,
    }}
  >
    {children}
  </ReactMarkdown>
);

export default Markdown;
