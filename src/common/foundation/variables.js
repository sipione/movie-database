/* COLOR HEX STARTS */
export const MainColorHex = "#E8DCC3";
export const PrimaryColorHex = "#2B5E48";
export const SecondaryColorHex = "#AD8E29";
export const DarkColorHex = "#303030";
export const ComplementaryColorHex = "#5E332B";
/* COLOR HEX ENDS */

/* COLOR RGBA STARTS */
export const MainColorRgba = (opacity)=> `rgba(232, 220, 195,${opacity})`;
export const PrimaryColorRgba = (opacity)=> `rgba(43, 94, 72,${opacity})`;
export const SecondaryColorRgba = (opacity)=> `rgba(173, 142, 41,${opacity})`;
export const DarkColorRgba = (opacity)=> `rgba(48, 48, 48,${opacity})`;
export const ComplementaryColorRgba = (opacity)=> `rgba(94, 51, 43,${opacity})`;
/* COLOR RGBA ENDS */

/*FONTS ELEMENTS START*/
export const FontSizeRatioH1 = 6;
export const FontSizeRatioH2 = 5;
export const FontSizeRatioH3 = 4;
export const FontSizeRatioH4 = 3;
export const FontSizeRatioBody = 2;

export const FontFamilyTitle = '"Source Sans Pro", Arial, sans-serif';
export const FontFamilyBody = '"Source Sans Pro", Arial, sans-serif';
/*FONTS ELEMENTS ENDS*/

/*SCREEN BREAKING POINTS*/
export const MobileMaxWidth = 600;
export const TabletMaxWidth = 900;
/*SCREEN BREAKING POINTS*/

/*BASE URL START*/
export const ImageBaseUrl = (width,filePath)=>`https://image.tmdb.org/t/p/w${width}${filePath}`;
export const AvatarBaseUrl = (filePath)=>`https://www.gravatar.com/avatar${filePath}`;
/*BASE URL ENDS*/