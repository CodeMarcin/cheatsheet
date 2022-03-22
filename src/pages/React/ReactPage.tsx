import { url } from 'inspector';
import { useParams } from 'react-router-dom';
import { ReactPageArray } from './ReactPageArray';

export const ReactPage = () => {
  const urlParams = useParams();

  const contextArray = ReactPageArray.filter(
    (item) => item.sectionTitle === urlParams.subCategory
  );

  return (
    <div>
      {contextArray.map((item) => (
        <p>{item.sectionTitle}</p>
      ))}
    </div>
  );
};
