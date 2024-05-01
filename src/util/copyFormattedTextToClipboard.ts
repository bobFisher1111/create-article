export const copyFormattedTextToClipboard= (copyChangeColor: any, text: string) => {
  copyChangeColor('#2F4C69');
  const copy = new ClipboardItem({ 'text/plain': new Blob([text], { type: 'text/plain' }) });
  navigator.clipboard.write([copy])
    .then(() => {
      console.log('Code coppied to clipboard successfully');
    })
    .catch((error) => {
      console.error('Error copying text to clipboard:', error);
    });
};