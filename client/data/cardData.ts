// interface for array
interface cards {
  name: string
  isFlipped: boolean
  isMatched: boolean
}

// cardDatabase type

export type cardDatabase = cards[]

// card data array

const cardData: cardDatabase = [
  { name: 'Red', isFlipped: false, isMatched: false },
  { name: 'Green', isFlipped: false, isMatched: false },
  { name: 'Blue', isFlipped: false, isMatched: false },
  { name: 'Yellow', isFlipped: false, isMatched: false },
]

export default cardData
