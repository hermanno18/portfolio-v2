export const formatDate = (value, locale='en', formatting = { month: 'short',  year: 'numeric'}) => {
  if (!value)
    return value;
  
  return new Intl.DateTimeFormat(locale, formatting).format(new Date(value));
}

export const isContactSocial = (e) => {
  return e.title.toLowerCase() != 'email' && e.title.toLowerCase() != 'whatsapp' &&  e.title.toLowerCase() != 'téléphone'
}