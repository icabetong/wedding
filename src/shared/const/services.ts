import {
  Icon24Hours,
  IconArmchair,
  IconCalendarTime,
  IconCashBanknote,
  IconPaperBag,
  IconPresentation,
  IconScissors,
  IconShieldLock,
  IconSpeakerphone,
  IconTruckDelivery,
  IconTruckLoading,
} from '@tabler/icons-react'

export const services: ProductData[] = [
  {
    key: 'coordination',
    title: 'Coordination Service',
    summary:
      "Ideal for couples with time and attention for wedding details, this service requires the couple's willingness to share necessary information, ensuring a smooth and organized wedding day as planned by coordinators.",
    features: [
      'Unlimited consultations for wedding planning',
      'Couple meeting four months before the wedding for updates',
      'Collecting and reviewing all supplier contracts',
      'Involvement in final details with venue, caterer, stylist, florist, and host',
      'Ocular visit and final walk-through at the venue',
      'Monitoring and managing wedding requirements',
      'Coordination of final timeline with suppliers',
      'Providing a detailed wedding day timeline to the couple',
      'Post-RSVP management',
      'Sending reminders to guests and wedding participants',
      'Pre-wedding day visit to the couple for checklist review',
    ],
  },
  {
    key: 'partial',
    title: 'Partial Planning Service',
    summary:
      'Designed for couples seeking additional wedding planning assistance, this service involves the couple booking their preferred suppliers, with subsequent communication and details handled entirely by the coordinators.',
    features: [
      'Provision of wedding planning materials',
      'Continuous communication throughout the wedding planning process',
      'Collection and review of all supplier contracts',
      'Creation of a wedding mood board',
      'Organization of the prenuptial shoot',
      'Assistance with invitations, giveaways, and menu planning with food tasting',
      'Ocular visits to the venue',
      'Coordination with suppliers for final on-the-day schedules',
      'Management of all meeting schedules',
      'Final detailing with the venue, caterer, stylist, florist, and host',
      'Close monitoring of wedding requirements, including RSVPs',
      'Provision of a comprehensive wedding day timeline',
      'Post-RSVP management and reminders to guests and participants',
      'Discussion of the final timeline with suppliers',
      'Pre-wedding day visit to the couple for checklist review',
    ],
  },
  {
    key: 'full',
    title: 'Full Planning Service',
    summary:
      'Tailored for couples residing abroad and choosing the Philippines as their wedding destination, this service is also ideal for those lacking the time to personally arrange and finalize all wedding details.',
    highlight: true,
    features: [
      'Provision of wedding planning materials',
      'Initial meeting to understand the couple and create a mood board',
      'Conceptualization of wedding details based on the mood board',
      'Budget proposal with recommended suppliers matching preferences and budget',
      'Processing and managing bookings for chosen suppliers',
      'Collection and review of all supplier contracts',
      'Organization of the prenuptial shoot',
      'Ocular visits to the venue',
      'Coordination with suppliers to finalize on-the-day schedules',
      'Scheduling and organizing all meetings for wedding planning',
      'Final detailing with the venue, caterer, stylist, florist, and host',
      'Close monitoring of wedding requirements, including RSVPs',
      'Provision of a comprehensive wedding day timeline',
      'Discussion of the final timeline with suppliers',
      'Post-RSVP management and reminders to guests and participants',
      'Pre-wedding day visit to the couple for checklist review',
    ],
  },
]

export const responsibilities: CardData[] = [
  {
    key: 'support',
    title: 'Comprehensive support for the couple',
    icon: Icon24Hours,
  },
  {
    key: 'timeline',
    title: 'Adherence to the finalized timeline',
    icon: IconCalendarTime,
  },
  {
    key: 'essentials',
    title: 'Ready emergency wedding kit with essentials',
    icon: IconScissors,
  },
  {
    key: 'central',
    title:
      'Central point of contact for suppliers and guests for a stress-free day',
    icon: IconSpeakerphone,
  },
  {
    key: 'suppliers',
    title: 'Coordination with suppliers for setup and timely deliveries',
    icon: IconTruckDelivery,
  },
  {
    key: 'guest',
    title: 'Managing guest reception and table seating',
    icon: IconArmchair,
  },
  {
    key: 'briefing',
    title: 'Briefing all wedding participants on their roles',
    icon: IconPresentation,
  },
  {
    key: 'delivery',
    title: 'Ensuring completeness and timely delivery of ceremonial items',
    icon: IconTruckLoading,
  },
  {
    key: 'safeguard',
    title: 'Safeguarding ceremonial items for turnover after the reception',
    icon: IconShieldLock,
  },
  {
    key: 'meals',
    title: 'Distributing crew meals and floral arrangements',
    icon: IconPaperBag,
  },
  {
    key: 'payment',
    title: 'Handling payment balances for all suppliers',
    icon: IconCashBanknote,
  },
]
