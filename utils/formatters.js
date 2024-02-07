export const formatDate = (value, locale='en', formatting = { month: 'short',  year: 'numeric'}) => {
  if (!value)
    return value;
  
  return new Intl.DateTimeFormat(locale, formatting).format(new Date(value));
}

export const isContactSocial = (e) => {
  return e.title.toLowerCase() != 'tweeter' &&  e.title.toLowerCase() != 'telegram'
}