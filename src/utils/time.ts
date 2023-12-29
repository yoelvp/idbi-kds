/**
 * Add digit for number
 *
 * @param number number to format
 * @returns string
 */
const addzero = (number: number): string => {
  return String(number).padStart(2, '0')
}

export const getFormattedTime = (): string => {
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const seconds = now.getSeconds().toString().padStart(2, '0')

  return `${hours}:${minutes}:${seconds}`
}

export const getHourAndTime = (): string => {
  const date = new Date()
  const hour = addzero(date.getHours())
  const minutes = addzero(date.getMinutes())

  return `${hour}:${minutes}`
}

export const currentFormattedDate = (): string => {
  const date = new Date()
  const year = date.getFullYear()
  const month = addzero(date.getMonth() + 1)
  const day = addzero(date.getDate())
  const hour = addzero(date.getHours())
  const minutes = addzero(date.getMinutes())
  const seconds = addzero(date.getSeconds())

  return `${year}-${month}-${day}T${hour}:${minutes}:${seconds}`
}
