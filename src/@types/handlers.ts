export type iProps = {
  femaleHandler: () => void;
  maleHandler: () => void;
};

export type ICard = {
  img?: string | undefined;
  desc?: string;
  price?: number;
  id?: string;
  title?: string;
  types?: number[];
  sizes?: number[];
  category?: number;
  rating?: number;
  sort?: number | undefined;
};
