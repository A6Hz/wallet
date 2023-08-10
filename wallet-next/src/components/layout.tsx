'use client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './main.css'
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@/utils/emotionCache';

type Children = {
  children: React.ReactNode
}


const emotionCache = createEmotionCache();


export default function RootLayout({ children }: Children) {

  return (
    <CacheProvider value={emotionCache}>
      <html lang="en">
        <body>
          {children}
        </body>
      </html >
    </CacheProvider>
  )
}

