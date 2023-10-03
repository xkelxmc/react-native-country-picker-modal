import { memo } from 'react'
import { Text } from 'react-native'
import * as nodeEmoji from 'node-emoji'

const Emoji = memo(({ name }: { name: string }) => {
  const emoji = nodeEmoji.get(name)
  return <Text allowFontScaling={false}>{emoji}</Text>
})

export { Emoji }
