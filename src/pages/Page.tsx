import { useParams } from 'react-router-dom';

import { PageDisplay } from './PageDisplay';

import { ReactPageArray } from './React/ReactPageArray';



export const Page = () => {
  const urlParams = useParams();
  const {mainCategory} =  urlParams


  switch (mainCategory) {
    case 'React':
      return <PageDisplay array={ReactPageArray}/>;

    default:
      return <PageDisplay array={ReactPageArray} />
  }
};
