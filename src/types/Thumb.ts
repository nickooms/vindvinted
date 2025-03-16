export interface Thumb {
  url: string;
  original_size: null;
}

export interface Thumb310 extends Thumb {
  type: 'thumb310';
  width: 310;
  height: 310;
}

export interface Thumb150 extends Thumb {
  type: 'thumb150';
  width: 150;
  height: 150;
}
export interface Thumb100 extends Thumb {
  type: 'thumb100';
  width: 100;
  height: 100;
}
export interface Thumb50 extends Thumb {
  type: 'thumb50';
  width: 50;
  height: 50;
}
export interface Thumb20 extends Thumb {
  type: 'thumb20';
  width: 20;
  height: 20;
}

export type Thumbnail = Thumb310 | Thumb150 | Thumb100 | Thumb50 | Thumb20;

export type Thumbnails = [Thumb310, Thumb150, Thumb100, Thumb50, Thumb20];
