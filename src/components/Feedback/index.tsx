import { Title, Text, TextBold, Image } from "./styles";
import AvatarFeedbackPositive from "@assets/AvatarFeedbackPositive.png";
import AvatarFeedbackNegative from "@assets/AvatarFeedbackNegative.png";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  isFit: boolean;
};

export function Feedback() {
  const route = useRoute();
  const { isFit } = route.params as RouteParams;

  return (
    <>
      {isFit ? (
        <>
          <Title color="PRIMARY">Continue assim!</Title>
          <Text>
            Você continua <TextBold>dentro da dieta.</TextBold> Muito bem!
          </Text>
        </>
      ) : (
        <>
          <Title color="SECONDARY">Que pena!</Title>
          <Text>
            Você <TextBold>saiu da dieta</TextBold> dessa vez, mas continue se
            esforçando e não desista!
          </Text>
        </>
      )}

      <Image source={isFit ? AvatarFeedbackPositive : AvatarFeedbackNegative} />
    </>
  );
}
