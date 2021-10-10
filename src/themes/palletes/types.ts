type ColorValue = string;

export type Text = {
  default: ColorValue; //#FFFFFF
  light: ColorValue; // #BDBDBD
  gray: ColorValue; //#828282
  dark: ColorValue; //#4F4F4F;
  primary: ColorValue; //#20D38F
  danger: ColorValue; //#ff6347
  text: ColorValue; // #8C8C8C;
  light_01: ColorValue; //#F2F2F2
};

type Background = {
  default: ColorValue; //#28292B
  primary: ColorValue; //#20D38F
  primary_01: ColorValue; // rgba(32, 211, 143, 0.1);
  primary_04: ColorValue; // rgba(32, 211, 143, 0.4);
  gray: ColorValue; //#828282
  light_0: ColorValue; //#F2F2F2
  light: ColorValue; //#E0E0E0
  dark: ColorValue; //#3D3E41
  darken: ColorValue; //#4f4f4f
  danger: ColorValue; //#ff6347
  socialButton: ColorValue;
};

type Border = {
  default: ColorValue; //#E0E0E0
  light: ColorValue; //#F2F2F2
  lighten: ColorValue; //#BDBDBD
  gray: ColorValue; //#828282
  dark: ColorValue; //#4F4F4F
  darken: ColorValue; //#28292B
  danger: ColorValue; //#ff6347
  primary: ColorValue; //#20D38F
};

export type Icon = {
  gray: ColorValue; //#BDBDBD
  default: ColorValue; //#F2F2F2
  primary: ColorValue; //#20D38F
  dark: ColorValue; // #4F4F4F
  light: ColorValue; //#828282
};

export type Pallete = {
  text: Text;
  background: Background;
  icon: Icon;
  border: Border;
};
