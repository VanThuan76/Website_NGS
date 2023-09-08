import  {useEffect} from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
function UseHightlightCode() {
    useEffect(() => {
        hljs.initHighlighting();
    }, []);
}

export default UseHightlightCode;