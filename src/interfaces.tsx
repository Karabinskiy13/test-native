export interface IPicture {
  id: string;
  width: number;
  height: number;
  urls: {
    full: string;
    small: string;
  };
  user: {
    name: string;
  };
}
