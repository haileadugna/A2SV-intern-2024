
export interface DataProps {
    _id: string;
  address: {
    region: string;
    woreda: string;
    zone: string;
    summary: string;
  };
  phoneNumbers: string[];
  emails: string[];
  coverPhoto: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  institutionName: string;
    }
