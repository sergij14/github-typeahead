import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../state";

// custom hooks for creating the typed selector
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
