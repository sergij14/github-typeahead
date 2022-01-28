import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../state";

// custom hook for creating the typed selector
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
