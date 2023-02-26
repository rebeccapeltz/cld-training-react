import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import xml from "react-syntax-highlighter/dist/esm/languages/hljs/xml";

import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";
SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("html", xml);

export default function Experiment(props) {
  return (
    <div>
      <div className="collapse">
        <input className="p-0 min-h-0" style={{minHeight: 0}} type="checkbox" />
        <div className="font-sans p-0 min-h-0 text-white collapse-title text-l font-medium bg-cldblue">
          Click for Experiment
        </div>
        <div className="collapse-content">
          <div>
            <p className="font-sans text-clddarkblue experiment-intro">
              {props.experimentTitle}
            </p>
            <div className="ml-4">
              <ul className="font-sans text-clddarkblue list-decimal">
                {props.instructions.map((inst, n) => (
                  <li key={n}>{inst}</li>
                ))}
              </ul>
            </div>
            <SyntaxHighlighter language="javascript" style={docco}>
              {props.codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}
