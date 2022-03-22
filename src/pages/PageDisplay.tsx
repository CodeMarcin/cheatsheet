import { url } from 'inspector';
import { useParams } from 'react-router-dom';
import { isTemplateTail } from 'typescript';
import { isUint16Array } from 'util/types';

import styles from './PageDisplay.module.css';

interface PageDisplayType {
  array: any[];
}

export const PageDisplay = ({ array }: PageDisplayType) => {
  const createURL = (string: string) => {
    return string.split(' ').join('_').toLowerCase();
  };

  const urlParams = useParams();

  const filteredArray = array.filter(
    (item) => item.sectionTitle === urlParams.subCategory
  );

  const contextArray = filteredArray.filter(
    (item) => item[0].section[0].title === 'coś_z_tabelami'
  );

  console.log(contextArray);
  return <div className={styles['page__wrapper']}></div>;
};
