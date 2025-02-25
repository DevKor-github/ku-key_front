type CaseType = {
  when?: boolean
  isDefault?: boolean
}

export const Case = ({ children }: CaseType & { children: React.ReactNode }): React.ReactNode => {
  return children
}

/**
 * 조건에 따라 컴포넌트를 달리 보여주고 싶을 때,
 * 가독성을 챙기기 위한 컴포넌트에요.
 */
export const Switch = ({ children }: { children: React.ReactElement<CaseType>[] }): React.ReactNode => {
  const defaultComponent = children.find(child => child?.props?.isDefault)
  const resultComponent = children.find(child => child?.props?.when)
  return resultComponent || defaultComponent
}
