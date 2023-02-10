import TransformationBuilder from "../components/TransformationBuilder";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function TransformationBuilderPage() {
  const codeString = `
    return (
        <div>
          <AdvancedImage cldImg={myImage.effect(cartoonify())} />
          <AdvancedImage cldImg={myImage.effect(outline())} />
        </div>
      )
    `;
  return (
    <div className={"mr-2"}>
      <h1
        className={
          "font-medium leading-tight text-4xl mt-0 mb-2 text-white-600"
        }
      >
        Introduction: Working with Transformation Builder
      </h1>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium text-indigo-500 bg-black">Click for Experiment</div>
        <div className="collapse-content">
          <div>
            <p>
    
              Experiment by creating a second AdvancedImage that uses the same
              myImage variable.
            </p>
            <div className="ml-4">
              <ul className="list-decimal">
                <li> Start by running the code.</li>
                <li>
                  Then make a copy of the AdvancedImage component directive. In
                  the second AdvancedImage Element use the outline effect
                </li>
                <li>
                  {" "}
                  Notice that the effect was applied to both rendered images.
                </li>
              </ul>
            </div>

            <SyntaxHighlighter language="javascript" style={docco}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <TransformationBuilder />
    </div>
  );
}

export default TransformationBuilderPage;
