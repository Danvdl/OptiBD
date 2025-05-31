import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import HttpRoundedIcon from '@mui/icons-material/HttpRounded';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';

import type { SvgIconProps } from '@mui/material/SvgIcon';

export interface ServiceData {
  title: string;
  description: string;
  icon: React.ComponentType<SvgIconProps>;
  details: string[];
}

export const services: ServiceData[] = [
  {
    title: 'Logistics Software',
    description: 'Inventory management, route optimization, and reporting tools to streamline operations.',
    icon: StorageRoundedIcon,
    details: [
      'Warehouse & stock tracking',
      'Automated route planning',
      'Real-time analytics dashboards',
    ]
  },
  {
    title: 'Web & API Development',
    description: 'Robust, secure, and scalable web applications and API backends using modern stacks.',
    icon: HttpRoundedIcon,
    details: [
      'Custom business web portals',
      'REST/GraphQL APIs',
      'Authentication & authorization',
    ]
  },
  {
    title: 'Custom Platforms',
    description: 'Bespoke platforms and MVPs — from idea to deployment.',
    icon: DashboardCustomizeRoundedIcon,
    details: [
      'End-to-end design and dev',
      'Iterative prototyping',
      'Cloud-native, scalable setup',
    ]
  },
  {
    title: 'Data & Analytics',
    description: 'Unlock insights with custom dashboards and smart data pipelines.',
    icon: QueryStatsRoundedIcon,
    details: [
      'Automated ETL workflows',
      'Real-time business KPIs',
      'Visualization & reporting',
    ]
  },
];
