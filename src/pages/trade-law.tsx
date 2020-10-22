import { Box, Heading, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/core'
import { FaChevronRight } from 'react-icons/fa'
import { shadows } from '../components/commonProps'

const TradeLawRow = ({ name, content }: { name: string, content: string }) => {
  return (
    <tr>
      <td><Heading textStyle="cardTitle" minWidth={[0, "100px"]}>{name}</Heading></td>
      <td><Text textStyle="cardBody">{content}</Text></td>
    </tr>
  )
}

const tradeData = [
  { name: "事業名", content: "Nippondering" },
  { name: "サイト運営責任者", content: "石丸愛夢" },
  { name: "所在地", content: "請求に応じて遅延なく開示  " },
  { name: "連絡先 電話番号", content: "請求に応じて遅延なく開示  " },
  { name: "メールアドレス", content: "aimu@nippondering.com  " },
  { name: "販売価格 ", content: "商品ごとに表示してあります  " },
  { name: "支払いの時期と方法", content: "PayPalの決済システムを利用しており、予約の申し込みの際に送信する請求書を使って、クレジットカード情報または銀行情報、及び個人情報を入力していただき決済させていただきます。  " },
  { name: "商品のお届けについて", content: "お客様に指定の場所へお越しいただき、現地でサービスを受けてい ただきます  " },
  { name: "キャンセル時の対応", content: "キャンセルポリシーにキャンセル料の取扱いを指定しています。 また、当社が何らかの理由でサービスを提供できない場合は、上記に限らず一部または全額を返 金いたします。  " },
]

const TradeLaw = () => {
  return (
    <Box className="background-pattern" >
      <Box className="background-pattern-gradient" />
      <Box maxW="950px" mx="auto" mb="50px" pt={{ base: 0, md: 4 }}>
        <Breadcrumb display={{ base: "none", md: "block" }} fontSize="0.8rem" p={2} color="#555" separator={< FaChevronRight color="#555" size="0.6rem" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/pricing">Pricing</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box backgroundColor="white" {...shadows[3]} borderRadius="4px" overflow="hidden" p={4}>

          <Heading as="h1" textStyle="sectionTitle" mb={2}>特定商取引法に関する表示</Heading>
          <Text textStyle="cardBody" mb={4}>* This page is required to abide by the Japanese Specified Commercial Transactions Act</Text>
          <table>
            <tbody>
              {tradeData.map(data => {
                return <TradeLawRow name={data.name} content={data.content} />
              })}
            </tbody>
          </table>
        </Box>
      </Box>
    </Box>
  )
}

export default TradeLaw