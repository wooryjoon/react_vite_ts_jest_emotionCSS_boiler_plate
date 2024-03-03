import styled from '@emotion/styled'

interface T_Spacing {
  size: number
  d?: 'vertical' | 'horizontal'
}

const Spacing = styled.div<T_Spacing>(({ size, d = 'vertical' }) => {
  if (d === 'vertical') {
    return {
      height: size,
    }
  } else if (d === 'horizontal') {
    return {
      width: size,
    }
  }
})

export default Spacing
