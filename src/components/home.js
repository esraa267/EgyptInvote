import { Box, FlatList, VStack, Heading } from "native-base";
import { useContext, useEffect } from "react";
import { getProducts } from "../actions/ProductsAction";
import { ProductsContext } from "../context";

import Grid from './grid';
import COLORS from "../colors/colors";
const Home = (props) => {
  const { state, dispatch } = useContext(ProductsContext);

  useEffect(() => {
    const resolveAction = async () => {
      dispatch(await getProducts());
    };
    resolveAction();
  }, []);
  return (
    <VStack>
      <Heading color={COLORS.green} fontSize="xl" p="4" pb="3">
       ProductsList
      </Heading>
    
      <Grid list={state.list} {...props}/>
    </VStack>
  );
};

export default Home;
