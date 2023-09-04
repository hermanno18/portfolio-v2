export const formatDate = (value, formatting = { month: 'short',  year: 'numeric'}) => {
  if (!value)
    return value;
  
  return new Intl.DateTimeFormat('en-EN', formatting).format(new Date(value));
}