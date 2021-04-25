import { createContext } from 'react'

export const menu = {
  lunch: Array(5).fill({
    author: 'kulina, PawonQu',
    title: 'Spageti Balognise cheese Jumbo bowl',
    image: 'https://kln.imgix.net/production/H42A380WDD-scaled_image_picker6537983739453687171.jpg',
    price: 27000
  }),

  dinner: Array(5).fill({
    author: 'kulina, PawonQu',
    title: 'Nasi Bento shrimp bento udang, egg roll ayam blackpaper',
    image: 'https://kln.imgix.net/production/85FZVHRD4E-scaled_image_picker856860820980010129.jpg',
    price: 27700
  })
}

export const cartItems = []

export const ProductContext = createContext(menu.lunch)