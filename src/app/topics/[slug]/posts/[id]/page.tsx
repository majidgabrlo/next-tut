import CommentCreateForm from "@/components/comments/CommentCreateForm";
import CommentList from "@/components/comments/CommentList";
import PostShow from "@/components/posts/PostShow";
import { fetchCommentsByPostId } from "@/db/queries/comments";
import { paths } from "@/paths";
import Link from "next/link";
interface PostShowPageProps {
  params: {
    slug: string;
    id: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, id } = params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>
      <PostShow postId={id} />
      <CommentCreateForm postId={id} startOpen />
      <CommentList fetchData={() => fetchCommentsByPostId(id)} />
    </div>
  );
}
