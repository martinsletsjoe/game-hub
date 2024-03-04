import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Card paddingY={3}>
      <Skeleton height="1px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GenreListSkeleton;
