export function excerptFormatter(text: string, length: number = 10) {
  text = text.trim();
  if (text.length <= length) {
    return text;
  }
  const words = text.split(' ');
  const excerptWords = words.slice(0, length);
  const excerpt = excerptWords.join(' ') + '...';
  return excerpt;
}