import { Provider } from "react-redux";
import { store } from "@/state/store";
import persistStore from "redux-persist/es/persistStore";

persistStore(store);
const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
