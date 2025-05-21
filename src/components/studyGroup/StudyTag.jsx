import { Badge } from "../common/styles/TagBadge.styled";

const StudyTag = ({ tag }) => {
  if (!tag) return null;

  const tagName = typeof tag === "string" ? tag : tag.name;
  return <Badge>#{tagName}</Badge>;
};

export default StudyTag;
