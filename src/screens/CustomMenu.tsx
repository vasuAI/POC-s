import React, {Component} from 'react';
import {Button, Linking, Text, View} from 'react-native';
import IframeRenderer, {iframeModel} from '@native-html/iframe-plugin';
import RenderHTML from 'react-native-render-html';
import {useRoute, useNavigation} from '@react-navigation/native';

import WebView from 'react-native-webview';

const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>Context Menu</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #ccc;
      }
    </style>
    <script>
      //script to clear selection/highlight
      const messageEventListenerFn = (e) =>{
        try{  
          if(e.origin === '' && typeof window.ReactNativeWebView === 'object'){
            const parsedData = JSON.parse(e.data)  
            if(parsedData?.what === 'clearSelection'){
              window.getSelection()?.removeAllRanges()
            }
          }
        }catch(e){
          console.log('External: ', 'exception in eventListener: ', e.message)
        } 
      }
      window.addEventListener('message', (e) => messageEventListenerFn(e))
      document.addEventListener('message', (e) => messageEventListenerFn(e))
    </script>
  </head>
  <body>
    <p>
      Select the text to see the custom context menu.
    </p>
    <p>
      The custom context menu will show the custom menus defined in the menuItems prop and call the onCustomMenuSelection
      on clicking on the menu Item. Testing symbols ' " < & > + - = ^ % $ # @ ! ~ ; :  ? 
    </p>
    <p>
      "Third Para with quotes"
    </p>
  </body>
</html>
`;

interface Props {}
interface State {}

// export default class CustomMenu extends Component<Props, State> {
export default CustomMenu = (props: any) => {
  // const {data} = props;
  const navigation = useNavigation();
  const {
    params: {data},
  } = useRoute();
  // console.log('??????', params);
  const [selectionInfo, setSelectionInfo] = React.useState(null);
  const webviewRef = React.useRef();

  const HTML1 = `<!DOCTYPE html>\n
  <html>
    <head>
    ${data}
    </html> `;

  const customHTMLElementModels = {
    iframe: iframeModel,
  };
  const renderers = {
    iframe: IframeRenderer,
  };
  return (
    <View>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <View style={{height: 1000}}>
        <WebView
          ref={webviewRef}
          source={{html: HTML1}}
          automaticallyAdjustContentInsets={false}
          menuItems={[
            {label: 'Highlight', key: 'highlight'},
            {label: 'Strikethrough', key: 'strikethrough'},
          ]}
          customHTMLElementModels={customHTMLElementModels}
        />
      </View>
    </View>
  );
};
