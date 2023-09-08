export type SickType = {
  sickCd: string;
  sickNm: string;
};

interface CacheValue {
  data: SickType[];
  timestamp: number;
}

export type CacheState = {
  [key: string]: CacheValue;
};

/*
const cachData: CacheState = {
  "query1": {
    data: {
      "sickCd": "A98",
      "sickNm": "달리 분류되지 않은 기타 바이러스출혈열"
    }],
    timestamp: 1630924174336
  },
  "query2": {
    data: ["resultA", "resultB", "resultC"],
    timestamp: 1630924256721
  }
};
 */
