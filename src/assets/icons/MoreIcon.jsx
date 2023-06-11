import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const MoreIcon = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.91821e-05 9.99991C9.91821e-05 4.47991 4.4701 -9.15527e-05 10.0001 -9.15527e-05C15.5201 -9.15527e-05 20.0001 4.47991 20.0001 9.99991C20.0001 15.5199 15.5201 19.9999 10.0001 19.9999C4.4701 19.9999 9.91821e-05 15.5199 9.91821e-05 9.99991ZM5.5201 11.1999C4.8601 11.1999 4.3201 10.6599 4.3201 9.99991C4.3201 9.33991 4.8601 8.80091 5.5201 8.80091C6.1801 8.80091 6.7101 9.33991 6.7101 9.99991C6.7101 10.6599 6.1801 11.1999 5.5201 11.1999ZM8.8001 9.99991C8.8001 10.6599 9.3401 11.1999 10.0001 11.1999C10.6601 11.1999 11.1901 10.6599 11.1901 9.99991C11.1901 9.33991 10.6601 8.80091 10.0001 8.80091C9.3401 8.80091 8.8001 9.33991 8.8001 9.99991ZM13.2801 9.99991C13.2801 10.6599 13.8101 11.1999 14.4801 11.1999C15.1401 11.1999 15.6701 10.6599 15.6701 9.99991C15.6701 9.33991 15.1401 8.80091 14.4801 8.80091C13.8101 8.80091 13.2801 9.33991 13.2801 9.99991Z"
      fill="white"
    />
  </Svg>
);
export default MoreIcon;
