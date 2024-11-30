import AcademicResearchIcon from '@/assets/icon/AcademicResearchIcon'
import AllIcon from '@/assets/icon/AllIcon'
import ExhibitionIcon from '@/assets/icon/ExhibitionIcon'
import HumanitiesIcon from '@/assets/icon/HumanitiesIcon'
import InstrumentalArtsIcon from '@/assets/icon/InstrumentalArtsIcon'
import LifeCultureIcon from '@/assets/icon/LifeCultureIcon'
import PerformingArtsIcon from '@/assets/icon/PerformingArtsIcon'
import ReligiousIcon from '@/assets/icon/ReligiousIcon'
import SocialIcon from '@/assets/icon/SocialIcon'
import SportsIcon from '@/assets/icon/SportsIcon'

export const CATEGORY_LIST = [
  { text: 'ALL', icon: AllIcon, type: null },
  { text: 'Instrumental Arts', icon: InstrumentalArtsIcon, type: 'Instrumental Arts' },
  { text: 'Social', icon: SocialIcon, type: 'Social' },
  { text: 'Life & Culture', icon: LifeCultureIcon, type: 'Living Culture' },
  { text: 'Performing Arts', icon: PerformingArtsIcon, type: 'Performing Arts' },
  { text: 'Humanities', icon: HumanitiesIcon, type: 'Humanities' },
  { text: 'Exhibition & Creative Writing', icon: ExhibitionIcon, type: 'Exhibition & Creative Writing' },
  { text: 'Religious', icon: ReligiousIcon, type: 'Religious' },
  { text: 'Sports', icon: SportsIcon, type: 'Sports' },
  { text: 'Academic Research', icon: AcademicResearchIcon, type: 'Academic Research' },
] as const

export type CategoryType = (typeof CATEGORY_LIST)[number]['type']
