import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { TypeRootState } from '../store/redux/store'
export const useTypeSelector: TypedUseSelectorHook<TypeRootState> = useSelector
