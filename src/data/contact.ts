export interface ContactItem {
  iconName: 'mail' | 'linkedin' | 'phone' | 'calendar';
  value: string;
  cta: string;
  href: string;
  external?: boolean;
}

export const CONTACT_ITEMS: ContactItem[] = [
  {
    iconName: 'mail',
    value: 'Andytule321@gmail.com',
    cta: 'Send message',
    href: 'mailto:Andytule321@gmail.com',
  },
  {
    iconName: 'linkedin',
    value: 'andy-tu-le',
    cta: 'View profile',
    href: 'https://linkedin.com/in/andy-tu-le',
    external: true,
  },
  {
    iconName: 'phone',
    value: '(905) 923–1997',
    cta: 'Call me',
    href: 'tel:+19059231997',
  },
  {
    iconName: 'calendar',
    value: 'Calendly',
    cta: 'Book a time',
    href: 'https://calendly.com/andytule321',
    external: true,
  },
];
