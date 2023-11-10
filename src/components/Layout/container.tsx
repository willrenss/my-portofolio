
import { css } from '@emotion/react'
import gelombangBackground from '@/images/2gelombang.png';

const container = css({
    background: `url('${gelombangBackground}') no-repeat`,
    backgroundSize: 'auto',
    backgroundPosition: 'right bottom',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px 10px',
    transition: 'all 0.25s ease-out',
})

const content = css({
    maxWidth: '600px'
})

const contactlist = css({
    minHeight: '100vh',
})

export const Container = ({ children }: { children: React.ReactNode }) => (
    <div css={container}>
        <div css={content}>
            {children}
        </div>

    </div>
)

export const ContanctList = ({ children }: { children: React.ReactNode }) => (
    <div css={contactlist}>       
            {children}
    </div>
)
