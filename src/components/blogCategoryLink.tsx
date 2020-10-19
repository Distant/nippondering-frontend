import Link from "next/link"
import React, { ReactNode } from "react"
import { Text, Button } from '@chakra-ui/core'

type Props = {
  category?: string
  label: string
  selected?: boolean
  alignRight?: boolean
}

export const BlogCategoryLink = ({ category, label, selected, alignRight }: Props) => {
  return (
    <Link href={!category ? "/blog" : `/blog?category=${category}`}>
      <Button variant="outline" outline="none" border="1px solid gray" textStyle="cardBodyLink" fontWeight={selected ? "bold" : "normal"}>{label}</Button>
    </Link >
  )
}