export interface IIconPaddings {
  pl?: number,
  pr?: number,
  pt?: number,
  pb?: number,
  ph?: number,
  pv?: number,
  padding?: number,
}

export const getPaddings = (props: IIconPaddings) => {
  return { 
    paddingLeft: props.pl ?? undefined, 
    paddingRight: props.pr ?? undefined, 
    paddingTop: props.pt ?? undefined, 
    paddingBottom: props.pb ?? undefined, 
    paddingHorizontal: props.ph ?? undefined, 
    paddingVertical: props.pv ?? undefined,
    padding: props.padding ?? undefined,
  };
};
