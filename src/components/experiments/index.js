import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import xml from "react-syntax-highlighter/dist/esm/languages/hljs/xml";

import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";
SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage('html', xml);

export default function Experiment(props) {
//   const experimentTitle = 'Experiment by creating a second AdvancedImage that uses the same Image variable.';
//   const instructions = [
//     "Start by running the code.",
//     "Then make a copy of the AdvancedImage component directive. In the second AdvancedImage Element use the outline effect.",
//     "Notice that the effect was applied to both rendered images.",
//     "Now create a new image object and apply the outline to the new object.",
//   ];

  return (
    <div >
      <div className="collapse">
        <input type="checkbox" />
        <div className="font-sans text-white collapse-title text-xl font-medium bg-cldblue">
          Click for Experiment
        </div>
        <div className="collapse-content">
          <div>
            <p className="font-sans text-clddarkblue experiment-intro">{props.experimentTitle}</p>
            <div className="ml-4">
              <ul className="font-sans text-clddarkblue list-decimal">
                {props.instructions.map((inst,n) => <li key={n} >{inst}</li>)}
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
