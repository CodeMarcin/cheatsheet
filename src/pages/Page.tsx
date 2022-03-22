import { useParams } from 'react-router-dom';

import { PageDisplay } from './PageDisplay';

import { ReactPageArray } from './React/ReactPageArray';

export const Page = () => {
  const createURL = (string: string) => {
    return string.split(' ').join('_').toLowerCase();
  };
  const urlParams = useParams();
  const { mainCategory, subCategory, link } = urlParams;

  let ArrayToFilter: any[] = [];

  switch (mainCategory) {
    case 'React':
      ArrayToFilter = ReactPageArray;
      break;

    default:
      ArrayToFilter = [];
  }

  const filteredArray = ArrayToFilter.find(
    (item) => item.sectionTitle === subCategory
  );

  let contextTitle = '';
  let contextText = [];


  for (let i = 0; i < filteredArray.context.length; i++) {
    if (createURL(filteredArray.context[i].contextTitle) === link) {
      contextTitle = filteredArray.context[i].contextTitle
      contextText = filteredArray.context[i].contextText;
    }

    // return {contextTitle, contextText}
  }

  return <PageDisplay contextTitle={contextTitle} contextText={contextText}/>;
};
