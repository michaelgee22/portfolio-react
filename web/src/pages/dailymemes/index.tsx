import { useState } from 'react'
import { DailyMemes } from '../../containers/DailyMemes'

type Props = {
  memes: string[]
}

const DailyMemesPage = (props: Props) => {
  const [memes, setMemes] = useState(props.memes)

  return (
    <DailyMemes>
      <DailyMemes.Header />
      <DailyMemes.ImageRenderer />
      <DailyMemes.CategoryMenu />
    </DailyMemes>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://www.reddit.com/r/programmerhumor/.json?&limit=100`)
  const { data } = await res.json()

  const memes = data.children
    .map((item: any) => {
      if (item.data && item.data.url) {
        const imageType = item.data.url.slice(-3)
        if (imageType === 'jpg' || imageType === 'png' || imageType === 'gif') {
          return item.data.url
        }
      }
    })
    .filter((meme: string) => typeof meme === 'string')

  return { props: { memes } }
}

export default DailyMemesPage
