"use client"
import NextLink from "next/link"
import {
  Alert,
  Container,
  HStack,
  Heading,
  Link,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"

export default function HomeClientPage() {
  return (
    <Container maxWidth="3xl" minHeight="100vh">
      <Stack
        paddingX={[4, 12]}
        paddingY={[6, 12]}
        spacing={12}
        flex={1}
        height="100vh"
        justifyContent={["flex-start", "center"]}
      >
        <Alert
          variant="outline"
          borderColor="orange.500"
          borderWidth="1px"
          borderRadius="md"
        >
          Lacra Labs is reimagining the future of Athletics using AI Agents. We
          are in early alpha so expect rapid updates. To get access, join our{" "}
          <Link href="https://discord.gg/e1">Discord Server</Link>
        </Alert>
        <Stack>
          <HStack>
            <Heading as="h1" fontSize="2xl">
              Lacra Labs
            </Heading>
            <Tag size="sm">Alpha</Tag>
          </HStack>
          <Text>
            Superagent is a platform that enables you to create, manage and run
            AI Agents in seconds. We are currently in open beta so bare with us.
            Make sure the read the documentation on how to integrate Superagent
            with your app.
          </Text>
        </Stack>
        <NextLink passHref href="https://docs.superagent.sh">
          <Stack
            minHeight="200px"
            bgGradient={useColorModeValue(
              "linear(to-l, gray.50, gray.200)",
              "linear(to-l, gray.600, gray.700)"
            )}
            justifyContent="flex-end"
            padding={8}
            borderRadius="lg"
            transition="0.2s all"
            _hover={{ transform: "scale(1.03)" }}
          >
            <Stack maxWidth={["full", "60%"]}>
              <Heading as="h1" fontSize="2xl">
                Documentation
              </Heading>
              <Text>
                Read more on how to get started with integrating Superagent in
                your apps here.
              </Text>
            </Stack>
          </Stack>
        </NextLink>
        <Text>
          Contribute on{" "}
          <Link
            textDecoration="underline"
            href="https://github.com/homanp/superagent"
          >
            Github
          </Link>
        </Text>
      </Stack>
    </Container>
  )
}
