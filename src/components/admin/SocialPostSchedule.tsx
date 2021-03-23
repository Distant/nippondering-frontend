import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/core"
import { ErrorMessage, Field, FieldProps, Form, Formik } from "formik"
import React, { useState } from "react"
import {
  ScheduledPost,
  ScheduledPostList,
  SocialMediaPostStatus,
  ScheduledPostRequestDto,
} from "../../types/socialPosts"
import * as Yup from "yup"
import { ctaButtonProps } from "../commonProps"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { postScheduledTweet } from "../../services/admin-service"
import useSWR from "swr"
import { url } from "../../utilities/fetchUtilities"

export const FormInput = ({ field, form, ...props }: FieldProps) => {
  return <Input {...field} {...props} mb={2} />
}

const SocialPostSchedule = () => {
  const socialPosts = useSWR<ScheduledPost[], any>(url(`api/socialMediaPosts`), async (url: string) => {
    const res = await fetch(new Request(url, { credentials: "include" }))
    return await res.json()
  })

  const schedulePost = (postDto: ScheduledPostRequestDto) => {
    postScheduledTweet(
      postDto,
      (_) => {
        socialPosts.revalidate()
      },
      (e) => console.log(e)
    )
  }

  return (
    <Flex direction="column" height="100%">
      <Heading textStyle="sectionTitle" textAlign="left" p={0} m={0} fontWeight="bold" as="h2">
        Social Schedule
      </Heading>

      <Grid rowGap={2}>
        {socialPosts.data &&
          socialPosts.data.map((post) => {
            return (
              <Box key={post.postId}>
                <Text>{post.message}</Text>
                {console.log(post.sendDate, post.message)}
                {new Date(post.sendDate).getTime() > Date.now() ? (
                  <Text fontSize="75%">{"Scheduled for " + new Date(post.sendDate).toLocaleString()}</Text>
                ) : (
                  <Text fontSize="75%">{"Posted at " + new Date(post.sendDate).toLocaleString()}</Text>
                )}
                {post.mediaType && (
                  <HStack>
                    {post.mediaType.twitter && <FaTwitter color="#1DA1F2" />}
                    {post.mediaType.facebook && <FaFacebook color="#4267B2" />}
                    {post.mediaType.instagram && <FaInstagram color="#fb3958" />}
                  </HStack>
                )}
              </Box>
            )
          })}
      </Grid>

      <Spacer />
      <Divider my={2} />

      <Formik
        initialValues={{
          message: "",
          date: "",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }),
          twitter: true,
          facebook: false,
          instagram: false,
        }}
        validationSchema={Yup.object({
          date: Yup.date().min(new Date(Date.now()), "Please choose a future date").required("Required"),
          time: Yup.string()
            .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]/, "Must be valid time")
            .required("Required"),
          message: Yup.string().max(240, "Must be fewer than 240 characters"),
          twitter: Yup.boolean(),
          facebook: Yup.boolean(),
          instagram: Yup.boolean(),
        })}
        onSubmit={(values, helpers) => {
          helpers.setSubmitting(true)
          const date =
            new Date(values.date).toISOString().slice(0, 10) +
            "T" +
            values.time +
            ":00.000+" +
            new Date().getTimezoneOffset() +
            ":00"
          console.log(date)
          schedulePost({
            message: values.message,
            sendDate: date,
          })
          helpers.setSubmitting(false)
          helpers.resetForm()
        }}
      >
        {(bag) => {
          return (
            <Form>
              <Flex direction="column">
                <FormControl id="message" isInvalid={bag.errors.message != undefined}>
                  <FormLabel htmlFor="adults" color="black" mb={1} mt={2} fontWeight="bold">
                    Message
                  </FormLabel>
                  <Field as={FormInput} type="text" name="message" id="message" />
                  <ErrorMessage name="message" />
                </FormControl>

                <FormControl id="date" isInvalid={bag.errors.date != undefined}>
                  <FormLabel htmlFor="date" color="black" mb={1} mt={2} fontWeight="bold">
                    Date
                  </FormLabel>
                  <Field as={FormInput} type="date" name="date" id="date" />
                  <ErrorMessage name="date" />
                </FormControl>

                <FormControl id="time" isInvalid={bag.errors.time != undefined}>
                  <FormLabel htmlFor="time" color="black" mb={1} mt={2} fontWeight="bold">
                    Time
                  </FormLabel>
                  <Field as={FormInput} type="time" name="time" id="time" />
                  <ErrorMessage name="time" />
                </FormControl>

                <HStack>
                  <FormControl id="twitter">
                    <HStack alignItems="center">
                      <FormLabel m={0}>Twitter</FormLabel>
                      <Field type="checkbox" name="twitter" id="twitter" />
                    </HStack>
                  </FormControl>
                  <FormControl id="facebook">
                    <HStack alignItems="center">
                      <FormLabel m={0}>Facebook</FormLabel>
                      <Field type="checkbox" name="facebook" id="facebook" />
                    </HStack>
                  </FormControl>
                  <FormControl id="instagram">
                    <HStack alignItems="center">
                      <FormLabel m={0}>Instagram</FormLabel>
                      <Field type="checkbox" name="instagram" id="instagram" />
                    </HStack>
                  </FormControl>
                </HStack>
                <Button isLoading={bag.isSubmitting} {...ctaButtonProps} minW={"100px"} type="submit" mt={2}>
                  Submit
                </Button>
              </Flex>
            </Form>
          )
        }}
      </Formik>
    </Flex>
  )
}

export default SocialPostSchedule
