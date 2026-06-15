import "../css/MD-auto.css";
//https://github.com/remarkjs/react-markdown
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import GitScripting from './Git-Scripting.md?raw';



function Scripting() {
  return (
    <div className="page">
      <Markdown remarkPlugins={[remarkGfm]}>
        {GitScripting}
      </Markdown>
    </div>
  );
}

export default Scripting;