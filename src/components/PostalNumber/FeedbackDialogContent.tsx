import { Loading } from "./Loading";
import { Error } from "./Error";
import { Success } from "./Success";
import { Unavailable } from "./Unavailable";
import { Outcome } from "./Outcome";

type Props = {
  loading: boolean;
  outcome: Outcome;
};

export const FeedbackDialogContent = ({ loading, outcome }: Props) => {
  if (loading) {
    return <Loading />;
  }
  switch (outcome) {
    case "error":
      return <Error />;

    case "success":
      return <Success />;

    case "unavailable":
      return <Unavailable />;
  }
};
