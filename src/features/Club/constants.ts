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
  { text: 'ALL', Icon: AllIcon, type: undefined },
  { text: 'Instrumental Arts', Icon: InstrumentalArtsIcon, type: 'Instrumental Arts' },
  { text: 'Social', Icon: SocialIcon, type: 'Social' },
  { text: 'Life & Culture', Icon: LifeCultureIcon, type: 'Living Culture' },
  { text: 'Performing Arts', Icon: PerformingArtsIcon, type: 'Performing Arts' },
  { text: 'Humanities', Icon: HumanitiesIcon, type: 'Humanities' },
  { text: 'Religious', Icon: ReligiousIcon, type: 'Religious' },
  { text: 'Exhibition & Creative Writing', Icon: ExhibitionIcon, type: 'Exhibition & Creative Writing' },
  { text: 'Sports', Icon: SportsIcon, type: 'Sports' },
  { text: 'Academic Research', Icon: AcademicResearchIcon, type: 'Academic Research' },
] as const

export type CategoryType = (typeof CATEGORY_LIST)[number]['type']
