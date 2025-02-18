export const HOME_QUERY_KEYS = {
  hotClubs: () => ['hotClub'],
  recommendedClubs: (isLogin: boolean) => ['recommendedClub', isLogin],
}
