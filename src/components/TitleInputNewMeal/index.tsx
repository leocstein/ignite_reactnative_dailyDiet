import { TitleInput } from "./style";

type Props = {
  title: string;
};

export function TitleInputNewMeal({ title }: Props) {
  return <TitleInput>{title}</TitleInput>;
}
