import { Heading, Spinner, HStack } from "native-base";
import COLORS from '../colors/colors'
const Loading = () => {
  return (
    <HStack marginTop={50} space={2} justifyContent="center">
      <Spinner color={COLORS.green} accessibilityLabel="Loading posts" />
      <Heading color={COLORS.green} fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
};
export default Loading;
