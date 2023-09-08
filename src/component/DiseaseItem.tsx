import React from 'react';
import { SickType } from '../types/sickType';

interface DiseaseItemProps {
  data: SickType;
}
// DiseaseItem 컴포넌트:
const DiseaseItem: React.FC<DiseaseItemProps> = ({ data }) => {
  return <li>{data.sickNm}</li>;
};
export default DiseaseItem;
