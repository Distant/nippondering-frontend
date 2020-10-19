
type BlogPostPreviewType = {
  postId: number
  owner: string
  ownerImage: string
  slug: string
  title: string
  content: string
  tags: string[]
  published: string
  previousPostLocation?: string
  nextPostLocation?: string

  summary: string
  image: string
}
export default BlogPostPreviewType

/*

    with
    static member Decoder =
        Decode.object (fun get ->
            {
              PostId = get.Required.Field "postId" Decode.int64
              Owner =  get.Required.Field "owner" Decode.string
              OwnerImage =  get.Optional.Field "ownerImage" Decode.string |> Option.defaultValue ""
              Title =  get.Required.Field "title" Decode.string
              Slug =  get.Required.Field "slug" Decode.string
              Content =  get.Required.Field "content" Decode.string
              Tags = get.Required.Field "tags"  (Decode.string |> Decode.list)
              DatePublished =  (get.Optional.Field "published" Decode.datetime) |> Option.defaultValue DateTime.MinValue
              PreviousLocation =  get.Optional.Field "previousPostLocation" Decode.string
              NextLocation =  get.Optional.Field "nextPostLocation" Decode.string

              Summary = get.Required.Field "summary" Decode.string
              ThumbUrl = get.Required.Field "image" Decode.string
            })

    static member ListItemDecoder =
        Decode.object (fun get ->
            {
              PostId = get.Required.Field "postId" Decode.int64
              Owner =  get.Required.Field "owner" Decode.string
              OwnerImage =  get.Optional.Field "ownerImage" Decode.string |> Option.defaultValue ""
              Title =  get.Required.Field "title" Decode.string
              Slug =  get.Required.Field "slug" Decode.string
              Content =  get.Required.Field "content" Decode.string
              Tags = get.Required.Field "tags"  (Decode.string |> Decode.list)
              DatePublished =  (get.Optional.Field "published" Decode.datetime) |> Option.defaultValue DateTime.MinValue
              PreviousLocation =  None
              NextLocation =  None

              Summary = get.Required.Field "summary" Decode.string
              ThumbUrl = get.Required.Field "image" Decode.string
            })
    member __.toMeta : Types.MetaData = {
        Title = (__.Title |> Types.toTitle)
        Description = __.Summary
        TwitterCard = "summary_large_image"
        TwitterTitle = (__.Title |> Types.toTitle)
        TwitterDescription = __.Summary
        TwitterImage = Some (Types.createImgUrl __.ThumbUrl).Thumb
        TwitterUrl = (sprintf "https://nippondering.com/blog/%s-%i" __.Slug __.PostId)
        OGImage = Some (Types.createImgUrl __.ThumbUrl).Thumb
        OgTitle = (__.Title |> Types.toTitle)
        OgDescription = __.Summary
        OgUrl = (sprintf "https://nippondering.com/blog/%s-%i" __.Slug __.PostId)
        OgType = Some "Website"
    }
    */