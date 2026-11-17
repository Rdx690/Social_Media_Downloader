import Link from 'next/link'
import { GitHubIcon, PortfolioIcon } from '@/components/icons'

export function SiteFooter() {
  return (
    <footer className='mt-16 border-t border-white/[0.08] pt-8 text-sm text-white/60 sm:mt-24'>
      <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
        <div className='flex flex-wrap items-center justify-center gap-5'>
          <span className='font-semibold text-white'>SOURAJIT VFX</span>
          <a href='https://sourajitvfx-portfolio.vercel.app/' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-1.5 hover:text-white'>
            <PortfolioIcon className='h-4 w-4' /> Portfolio
          </a>
          <a href='https://github.com/Rdx690' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-1.5 hover:text-white'>
            <GitHubIcon className='h-4 w-4' /> GitHub
          </a>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-5'>
          <Link href='/privacy' className='hover:text-white'>Privacy</Link>
          <Link href='/terms' className='hover:text-white'>Terms</Link>
        </div>
      </div>
      <p className='mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-white/45'>
        © {new Date().getFullYear()} SOURAJIT VFX. All rights reserved.
      </p>
      <p className='mx-auto mt-2 max-w-2xl text-center text-xs leading-relaxed text-white/45'>
        Public posts only. This independent tool is not affiliated with or endorsed by TikTok, X, Instagram, Facebook, YouTube or other platforms.
      </p>
    </footer>
  )
}
