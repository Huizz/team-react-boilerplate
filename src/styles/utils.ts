const SIZE = {
  PHONE: 480,
  TABLET: 900
}

// const COLOUR = {
//   PRIMARY: 'red'
// }

interface IBreakpoint {
  phone: (extraStyles: string) => string;
  tablet: (extraStyles: string) => string;
}

export const breakpoint: IBreakpoint = {
  phone: (extraStyles: string): string => {
    return `@media (max-width: ${SIZE.PHONE-1}px) {
      ${extraStyles}
    }`
  },
  tablet: (extraStyles: string): string => {
    return `@media (min-width: ${SIZE.PHONE}px) and (max-width: ${SIZE.TABLET}px) {
      ${extraStyles}
    }`
  },
};

interface ITransition {
  active: (extraStyles: string) => string;
}

export const transition: ITransition = {
  active: (extraStyles: string): string => {
    return `&:active {
      ${extraStyles}
    }`
  }
};
