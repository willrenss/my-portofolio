import { css } from '@emotion/react';

export const flex = css({
    display: 'flex'
})

export const flexCenter = css({
    display: 'flex',
    alignItems: 'center'
})

export const fullFlexCenter = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})


export const fullCenterColumn = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',   
    justifyContent: 'center'
})