import type { colors } from '@/ui/theme/colors'

type ColorKeyOf = keyof typeof colors

export type Color = `${ColorKeyOf}.${keyof typeof colors[ColorKeyOf]}`
