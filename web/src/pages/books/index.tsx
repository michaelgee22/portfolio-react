import { Box, Heading } from '@chakra-ui/react'
import { AwesomeBooks } from '../../containers/Books'

import { RecommendationTypes } from '../../containers/Books/Recommendation'
import { recommendations } from '../../constants/awesome-books'

const AwesomeBooksPage = () => {
  return (
    <AwesomeBooks>
      <Box as="header" p="0 16px" pt="16px">
        <Heading
          bgGradient="linear-gradient(to bottom right, #e94057, #f27121)"
          bgClip="text"
          fill="transparent"
          textAlign="center"
        >
          awesome-books
        </Heading>
        <Box as="p" maxWidth="800px" m="0 auto" fontSize="1.2em" textAlign="center">
          All-time favorite book recommendations from awesome software developers. Join the
          newsletter! Stay up to date for when new book recommendations are published!
        </Box>
      </Box>

      <AwesomeBooks.SubscriptionForm />

      <Box as="h2" textAlign="center" fontSize="32px" m="40px">
        🚀 First Book Coming Soon 🚀
      </Box>

      {/* {recommendations.map((item, index) => {
        return (
          <AwesomeBooks.Recommendation
            type={index === 0 ? RecommendationTypes.featured : RecommendationTypes.listItem}
            {...item}
            key={index}
          />
        )
      })} */}

      <AwesomeBooks.Footer />
    </AwesomeBooks>
  )
}

export default AwesomeBooksPage
