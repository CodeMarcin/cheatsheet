import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import styles from './PageDisplay.module.css';

interface PageDisplayType {
  contextTitle: string;
  contextText: any;
}

export const PageDisplay = ({ contextTitle, contextText }: PageDisplayType) => {
  const codeString = '(num) => num + 1';
  return (
    <div className={styles['page__wrapper']}>
      <h1 className={styles['page__title']}>{contextTitle}</h1>
      {contextText.map((item: any) => {
        return (
          <>
            <p className={styles['page__fileName']}>{item.fileName}</p>
            <p className={styles['page__desc']}>{item.desc}</p>
            <SyntaxHighlighter language="typescript" style={a11yDark}>
              {item.code}
            </SyntaxHighlighter>
          </>
        );
      })}
    </div>
  );
};
