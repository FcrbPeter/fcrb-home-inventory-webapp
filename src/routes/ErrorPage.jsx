import {useRouteError} from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <div>{error.statusText}</div>
      <div>{error.message}</div>
    </div>
  )
}