import * as L from "react-loadable";
import { Loading } from "components/loading";

export const Loadable = options => L({
	loading: Loading,
	...options
});
