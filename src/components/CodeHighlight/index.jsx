import styles from "./index.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import clipboard from '/assets/clipboard.png'
import { useEffect, useState } from "react";


const CodeHighlight = ({ codeString }) => {
    const [isCopying, setIsCopying] = useState(false);

    const copyHandler = () => {
        navigator.clipboard.writeText(codeString);
        setIsCopying(true);
        setTimeout(()=>{
            setIsCopying(false);
        },1000)
    }
  

    // useEffect(()=> {

    // },[isCopying])
  return (
    <div>
      <div className={styles.head}>
        <span>Code</span>
        <button onClick={copyHandler} className={styles.copy_btn} >{isCopying ? <span>copied!</span>: <img src={clipboard} className={styles.clipboard_img} alt="" /> }</button>
      </div>
      <div className="syntax-highlighter">
      <SyntaxHighlighter
        language="javascript"
        style={materialOceanic}
        customStyle={{
          padding: "10px",
          margin: "0",
          textAlign: "left",
        }}
        codeTagProps={{
          style: {
            textAlign: "left",
          },
        }}
        preTagProps={{
          style: {
            textAlign: "left",
          },
        }}
      >
        {codeString}
      </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeHighlight;
