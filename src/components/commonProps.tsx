import { HeadingProps, ButtonProps, BoxProps, Text } from "@chakra-ui/core"
import { Price } from "../types/tour"
import { FaChevronRight } from "react-icons/fa"

export const shadows = [
  { boxShadow: "0 1px 3px rgba(77,73,79,0.12), 0 1px 2px rgba(19,9,70,0.24);" },
  { boxShadow: "0 2px 8px rgba(77,73,87,0.16), 0 2px 4px rgba(19,9,70,0.23)" },
  { boxShadow: "0 6px 14px rgba(77,73,87,0.19), 0 4px 8px rgba(34,12,160,0.14)" },
  { boxShadow: "0 8px 20px rgba(77,73,87,0.2), 0 6px 16px rgba(34,12,160,0.12)" },
  { boxShadow: "0 19px 38px rgba(77,73,87,0.22), 0 15px 18px rgba(34,12,160,0.12)" },
]

export const highlightShadows = [
  { boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.24);" },
  { boxShadow: "0 3px 20px rgba(60,0,80,0.16), 0 3px 8px rgba(60,0,80,0.32)" },
  { boxShadow: "0 10px 20px rgba(0,0,0.1,0.19), 0 6px 6px rgba(0,0,0,0.23)" },
  { boxShadow: "0 14px 28px rgba(0,0,0.1,0.25), 0 10px 10px rgba(0,0,0,0.22)" },
  { boxShadow: "0 19px 38px rgba(0,0,0.1,0.30), 0 15px 12px rgba(0,0,0,0.22)" },
]

export const PriceDisplay = ({
  symbol,
  code,
  amount,
  size = "md",
}: {
  symbol: string
  code: string
  amount: number
  size?: "md" | "lg"
}) => {
  return (
    <Text as="span" textStyle="cardBody" mx={[0, 0, 0]} p={0}>
      <Text as="small" color="purple.500" fontSize={14} paddingLeft="0.25em">
        {symbol == "US$" ? "$" : symbol}
      </Text>
      <Text as="b" color="purple.500" fontSize={size == "md" ? "1.3rem" : "1.6rem"} textAlign="center">
        {amount.toLocaleString(code, { maximumFractionDigits: 0, minimumFractionDigits: 0 })}{" "}
      </Text>
    </Text>
  )
}

export const cardTitleProps: HeadingProps = {
  fontWeight: "bold",
  fontSize: "1.1rem",
  ml: "2rem",
  p: "2",
  textAlign: "left",
  color: "black",
}

export const cardBodyProps = {
  fontWeight: "normal",
  fontSize: "0.9rem",
  mx: { base: 1, md: 2 },
  color: "gray.600",
  p: "2",
  letterSpacing: "0.01rem",
}

export const errorTextProps = {
  textStyle: "cardBody",
  paddingTop: "0",
  marginTop: "-.5rem",
  fontWeight: "normal",
  fontSize: "0.9rem",
  color: "red.400",
  letterSpacing: "0.01rem",
}

export const ctaButtonProps: ButtonProps = {
  backgroundColor: "#934AAD",
  color: "white",
  fontWeight: "normal",
  alignSelf: "center",
  children: null,
  border: "0px",
  boxShadow: shadows[1].boxShadow,
  borderRadius: "24px",
  transition: "all 100ms ease-out",
  _hover: { transform: "scale(1.1)", boxShadow: shadows[2].boxShadow, backgroundColor: "purple.500" },
  _focus: { transform: "scale(1.1)", boxShadow: shadows[2].boxShadow },
  _active: { backgroundColor: "purple.600" },
}

export const primaryButtonSolid: ButtonProps = {
  variant: "solid",
  backgroundColor: "#934AAD",
  color: "white",
  fontWeight: "normal",
  alignSelf: "center",
  children: null,
  border: "0px",
  transition: "all 80ms",
  _hover: { backgroundColor: "purple.400" },
  _focus: { backgroundColor: "purple.600" },
  _active: { backgroundColor: "purple.600" },
}

export const secondaryButtonSolid: ButtonProps = {
  variant: "solid",
  backgroundColor: "green.500",
  color: "white",
  fontWeight: "normal",
  alignSelf: "center",
  children: null,
  border: "0px",
  transition: "all 80ms",
  _hover: { backgroundColor: "green.400" },
  _focus: { backgroundColor: "green.600" },
  _active: { backgroundColor: "green.600" },
}

export const tertiaryButtonSolid: ButtonProps = {
  variant: "solid",
  backgroundColor: "orange.500",
  color: "white",
  fontWeight: "normal",
  alignSelf: "center",
  children: null,
  border: "0px",
  transition: "all 80ms",
  _hover: { backgroundColor: "orange.400" },
  _focus: { backgroundColor: "orange.600" },
  _active: { backgroundColor: "orange.600" },
}

export const primaryButtonOutline: ButtonProps = {
  backgroundColor: "transparent",
  border: "2px solid #934AAD",
  color: "#934AAD",
  fontWeight: "bold",
  alignSelf: "center",
  children: null,
  padding: 2,
  transition: "all 25ms",
  _hover: { borderColor: "purple.400", textColor: "purple.400" },
  _focus: { borderColor: "purple.600", textColor: "purple.600" },
  _active: { borderColor: "purple.600", textColor: "purple.600" },
}

export const primaryButtonText: ButtonProps = {
  backgroundColor: "transparent",
  color: "purple.500",
  fontWeight: "bold",
  alignSelf: "center",
  children: null,
  padding: 2,
  transition: "all 25ms",
  _hover: { textDecor: "underline", _disabled: { textDecor: "none" }, backgroundColor: "transparent" },
  _focus: { textDecor: "underline" },
}

export const breadcrumbProps = {
  display: { base: "none", md: "block" },
  fontSize: "0.8rem",
  p: 2,
  color: "#555",
  separator: <FaChevronRight color="#555" size="0.6rem" />,
}
