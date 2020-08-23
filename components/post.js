export default function Post({ contentHtml }) {
  return (
    <div className="post" dangerouslySetInnerHTML={{ __html: contentHtml }} />
  )
}
