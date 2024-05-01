export const copyLink = (copyChangeColor: any, link: string | undefined) => {
  if (link !== undefined) {
    const copy = navigator.clipboard.writeText(link);
    copyChangeColor('#2F4C69');
    return copy;
  }
};

export default copyLink;