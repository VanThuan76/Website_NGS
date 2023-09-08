import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import Code from '@editorjs/code';
// import LinkTool from '@editorjs/link';
import Image from '@editorjs/image';
// import Media from './customTools/Media';
import Raw from '@editorjs/raw';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from '@editorjs/simple-image';
import {uploadImageAndReturnUrl} from "@/schemas/services/fireBase.service";
import editorjsCodeflask from '@calumk/editorjs-codeflask';
export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: editorjsCodeflask,
  // linkTool: LinkTool,
  image: {
    class: Image,
    config: {
      uploader: {
        /**
         * Upload file to the server and return an uploaded image data
         * @param {File} file - file selected from the device or pasted by drag-n-drop
         * @return {Promise.<{success, file: {url}}>}
         */
        uploadByFile(file) {
          return uploadImageAndReturnUrl(file).then(url => {
            return Promise.resolve({
              success: 1,
              file: {url: url}
            })
          })
        },
      }
    }
  },
  raw: Raw,
  header: Header,
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};
