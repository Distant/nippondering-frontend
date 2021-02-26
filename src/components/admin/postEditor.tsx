import BlogPostFull, { PostImage } from "../../types/blogPostFull"
import {
  Button,
  Heading,
  Input,
  Textarea,
  Image,
  Divider,
  ButtonGroup,
  Spacer,
  FormLabel,
  FormControl,
  FormErrorMessage,
  Text,
  HStack,
  Box,
} from "@chakra-ui/core"
import React, { useRef } from "react"
import ReactMarkdown from "react-markdown"
import { useState, useCallback } from "react"
import { imgUrl } from "../../utilities/fetchUtilities"
import { updateBlogPost, uploadImages } from "../../services/admin-service"
import { primaryButtonOutline, primaryButtonSolid, primaryButtonText } from "../commonProps"

type Props = {
  post: BlogPostFull
  stopEditing: () => void
}

const Tags = (props: { allTags: string[]; selectedTags: string[]; updateTags: (tags: string[]) => void }) => {
  const [newTag, setNewTag] = React.useState<string>("")

  const removeTag = useCallback(
    (tag: string) => {
      props.updateTags(props.selectedTags.filter((t) => t != tag))
    },
    [props.selectedTags, props.updateTags]
  )

  const addTag = useCallback(
    (tag: string) => {
      props.updateTags([tag, ...props.selectedTags])
    },
    [props.selectedTags, props.updateTags]
  )

  return (
    <div>
      <HStack>
        {props.selectedTags &&
          props.selectedTags.map((tag: string) => (
            <HStack backgroundColor={"blue.100"} px={2} borderRadius={8} key={tag}>
              <Text ml={2}>{tag}</Text>
              <Button {...primaryButtonText} m={0} p={0} onClick={() => removeTag(tag)}>
                x
              </Button>
            </HStack>
          ))}
      </HStack>
      <Spacer my={2} />
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addTag(newTag)
          setNewTag("")
        }}
      >
        <FormControl id="newTag">
          <FormLabel>Add Tag:</FormLabel>
          <Input
            placeholder="...type new tag and hit enter"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            label="Add Tag"
          ></Input>
        </FormControl>
      </form>
    </div>
  )
}

const ImagesInput = ({ images, onClick }: { images: PostImage[]; onClick: (e: any) => void }) => {
  return (
    <div>
      {images.map((image) => {
        return (
          <Image
            key={image.path}
            src={imgUrl(image.path) + "_thumb" + (image.hasWebp ? ".webp" : ".jpg")}
            p={2}
            height="100px"
            width="auto"
            minWidth="50px"
            display="inline"
            borderRadius={4}
            m={1}
            onClick={(e) => onClick(image)}
          />
        )
      })}
    </div>
  )
}

const PostEditor = ({ post, stopEditing }: Props) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(post.tags)

  const imagesInputRef = useRef<HTMLInputElement>(null)
  const [imagesToUpload, setImagesToUpload] = useState<FileList>()

  const [postImages, setPostImages] = useState<PostImage[]>(post.images)

  const [title, setTitle] = useState<string>(post.title)
  const [summary, setSummary] = useState<string>(post.summary)
  const [markdown, setMarkdown] = useState<string>(post.content)
  const [[selStart, selEnd], setSelection] = useState([0, 0])

  function modifyText(text: string) {
    let s =
      markdown.substring(0, selStart) + text + markdown.substring(selStart, selEnd) + text + markdown.substring(selEnd)
    setMarkdown(s)
  }
  function insertAtSelection(text: string) {
    let s = markdown.substring(0, selStart) + text + markdown.substring(selStart)
    setMarkdown(s)
  }

  const uploadSelectedImages = (e: any) => {
    console.log(imagesToUpload)
    if (imagesInputRef.current && imagesToUpload) {
      uploadImages(
        post.postId,
        imagesToUpload,
        (images) => {
          setPostImages([...images, ...postImages])
        },
        (e: any) => {
          console.log("Upload Images Error", e)
        }
      )
      setImagesToUpload(undefined)
      imagesInputRef.current.value = ""
    }
  }

  const [saving, setSaving] = useState(false)
  const savePost = () => {
    setSaving(true)
    updateBlogPost(
      { postId: post.postId, title: title, content: markdown, tags: selectedTags, summary: summary },
      () => {
        setSaving(false)
      },
      (e) => {
        console.log(setSaving(false))
      }
    )
  }

  const markdownTextAreaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <div>
      <Heading as="h1" textStyle="sectionTitle" textAlign="left">
        Edit Post
      </Heading>

      {
        // Tags Editor
      }
      <Tags allTags={selectedTags} selectedTags={selectedTags} updateTags={(tags: string[]) => setSelectedTags(tags)} />

      <Spacer my={2} />

      {
        // Title
      }
      <FormControl id="title" isInvalid={title.length > 200}>
        <FormLabel>Title:</FormLabel>
        <Input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        ></Input>
        <FormErrorMessage>Must be 200 characters or less</FormErrorMessage>
      </FormControl>

      <Spacer my={2} />

      {
        // Summary
      }
      <FormControl id="summary" isInvalid={summary.length > 150}>
        <FormLabel>Summary:</FormLabel>
        <Textarea
          placeholder="...enter summary"
          onChange={(e) => {
            setSummary(e.target.value)
          }}
          value={summary}
        ></Textarea>
        <FormErrorMessage>Must be 150 characters or less</FormErrorMessage>
      </FormControl>

      <Spacer my={2} />

      {
        // Image display and upload
      }
      <FormControl id="images">
        <FormLabel>Images:</FormLabel>
        {postImages && (
          <ImagesInput
            images={postImages}
            onClick={(image) => insertAtSelection(`![](${imgUrl(image.path + (image.hasWebp ? ".webp" : ".jpg"))})`)}
          />
        )}
        <Input
          type="file"
          accept="image/jpeg"
          multiple={true}
          onChange={(e) => {
            if (e.target.files) setImagesToUpload(e.target.files)
          }}
          ref={imagesInputRef}
        />
        <Button
          disabled={imagesToUpload === undefined}
          {...primaryButtonSolid}
          mr={2}
          onClick={uploadSelectedImages}
          my={2}
        >
          Upload Images
        </Button>
      </FormControl>

      <Spacer my={2} />

      {
        // Post markdown
      }
      <FormControl id="markdown" isInvalid={markdown.length > 20000}>
        <FormLabel>Post Markdown:</FormLabel>
        <ButtonGroup>
          <Button {...primaryButtonOutline} onClick={(e) => modifyText("**")}>
            <b>b</b>
          </Button>
          <Button {...primaryButtonOutline} onClick={(e) => modifyText("*")}>
            <i>i</i>
          </Button>
          <Button {...primaryButtonOutline} onClick={(e) => insertAtSelection("#")}>
            h1
          </Button>
          <Button {...primaryButtonOutline} onClick={(e) => insertAtSelection("##")}>
            h2
          </Button>
          <Button {...primaryButtonOutline} onClick={(e) => insertAtSelection("##")}>
            h3
          </Button>
          <Button {...primaryButtonOutline} onClick={(e) => insertAtSelection("![]()")}>
            img
          </Button>
        </ButtonGroup>

        <Spacer my={2} />

        <Textarea
          minHeight="360px"
          placeholder="...enter blog post"
          ref={markdownTextAreaRef}
          onMouseUp={(e) => {
            if (markdownTextAreaRef.current) {
              const i = markdownTextAreaRef.current.selectionStart
              const j = markdownTextAreaRef.current.selectionEnd
              setSelection([i, j])
            }
          }}
          onChange={(e) => {
            setMarkdown(e.target.value)
            let sel: [number, number] = [e.target.selectionStart, e.target.selectionEnd]
            setSelection(sel)
          }}
          value={markdown}
        ></Textarea>
        <FormErrorMessage>Must be 20000 characters or less</FormErrorMessage>
      </FormControl>

      <Spacer my={2} />

      <Button {...primaryButtonSolid} mr={2} onClick={savePost}>
        Save Post
      </Button>
      <Button {...primaryButtonOutline} onClick={stopEditing}>
        Back To Posts
      </Button>

      <Divider my={4} />

      {
        // Preview
      }
      <Box mx={8} textStyle="blogPost">
        <ReactMarkdown source={markdown} escapeHtml={false} />
      </Box>
    </div>
  )
}

export default PostEditor
